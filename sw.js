const CACHE = 'V2'
const CACHE_IMGS = 'V2_img'
const CACHE_HTML = 'V2_page'
const CACHE_ASSETS = 'V2_assets'


const assetsExpiration = new Map()

const CACHE_FILES = [
    '/t/offline.php',
    "/t/assets/manifest/icon512_rounded.png",
    'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|DM+Serif+Display&display=swap',
    '/t/assets/manifest/manifest.json',
    'https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2',
    'https://fonts.gstatic.com/s/dmsans/v15/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2'

]






self.addEventListener('install', e=>{
    self.skipWaiting()
    
    e.waitUntil(
        (async ()=>{
           const cache = await caches.open(CACHE) 
           cache.addAll(CACHE_FILES)


        })()
    )
})


self.addEventListener('activate', e=>{
 
    e.waitUntil(
        (async ()=>{
           const keys = await caches.keys()
           await Promise.all(
            keys.map(k=>{
                if( k !== CACHE && k !== CACHE_IMGS && k !== CACHE_HTML ) return caches.delete(k)
            })
           )
        })()
    )
})


self.addEventListener('fetch', e=>{
    const url = new URL(e.request.url)
    

    e.respondWith(

        (async ()=>{
            if(e.request.destination === 'document'){
                await clearExpiratedAssets()
                try{

                    return await cacheFirstThenNetwork(CACHE_HTML, e.request,{
                        save:true,
                        maxEntries:50,
                        maxAge: setMaxAgeInDay(10)
                    })

                }catch (e){
                    return await cacheOnly(CACHE, '/t/offline.php')
                }
            }else if(e.request.destination === 'image'){

                return await cacheFirstThenNetwork(CACHE_IMGS, e.request,{
                    save:true,
                    maxEntries: 50,
                    maxAge: setMaxAgeInDay(15) 
                })


            }else{
                return await cacheFirstThenNetwork(CACHE_ASSETS, e.request,{
                    save:true,
                    maxAge: setMaxAgeInDay(5)
                })
            }
                
        
        })()
    )
})

//STRATEGIES

async function cacheFirstThenNetwork(_cache, _req, _options = {}){

    const options = setOptions(_options)

    const cache = await caches.open(_cache)
    const cached =  await cache.match(_req)
    if(cached) return cached
    const res =  await fetch(_req)
    if(options.save) await saveInCache(_cache, _req, res, options)
    return res
}

async function cacheOnly(_cache, _req){
    const cache = await caches.open(_cache)
    return await cache.match(_req)
}

async function networkOnly( _req){
    return await fetch(_req)
}

async function networkFirstThenCache(_cache, _req, _options = {}){

    const options = setOptions(_options)
    const res =  await fetch(_req)
    if(options.save && res) await saveInCache(_cache, _req, res, options)
    if(res) return res
    const cache = await caches.open(_cache)
    const cached =  await cache.match(_req)
    return cached

}


async function staleWhileRevalidate(_cache, _req, _options){
    const options = setOptions(_options)
    const res =  await fetch(_req)
    const cache = await caches.open(_cache)
    const cached =  await cache.match(_req)
    if(res) await saveInCache(_cache, _req, res, {...options,save:true})
    return cached
}








//Utils

function setOptions(_options){
    return options = {
        save: false,
        maxEntries:0,
        maxAge:0,
        ..._options
    }
}

function setMaxAgeInDay(_days){
    return Date.now() + _days * 24 * 60 * 60 * 1000
}

async function saveInCache(_cache, _req, _res, _options){
    if(CACHE_FILES.includes(_req.url)) return
    const cache = await caches.open(_cache)
    await cache.put(_req, _res.clone())
    if(_options.maxAge) assetsExpiration.set(_req.url, {url:_req.url, exp: _options.maxAge, cache:_cache})
    if(_options.maxEntries > 2) await cacheLimit(cache, _options.maxEntries)
    

}

async function cacheLimit(_cache,_maxEntries){
    const keys = await _cache.keys()
    if (keys.length > _maxEntries) {
        await _cache.delete(keys[0]);
        await cacheLimit(_cache, _maxEntries);
    }
}


async function clearExpiratedAssets(){
    const now = Date.now()
    const expired = [...assetsExpiration.values()].filter(entry => entry.exp < now)
    if (expired.length === 0) return
    for (const entry of expired) {
        const cache = await caches.open(entry.cache)
        await cache.delete(entry.url)
        assetsExpiration.delete(entry.url)
    }
}








