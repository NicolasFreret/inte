const CACHE = 'V3'

const CACHE_FILES = [
    '/t/offline.php',
    '/t/assets/css/style.css',
    'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|DM+Serif+Display&display=swap',
    '/t/assets/manifest/manifest.json',
    'https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2',
    'https://fonts.gstatic.com/s/dmsans/v15/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2'

]

self.addEventListener('install', e=>{
    self.skipWaiting()
    console.log(`install ${CACHE}`)
    e.waitUntil(
        (async ()=>{
           const cache = await caches.open(CACHE) 
           cache.addAll(CACHE_FILES)
        })()
    )
})


self.addEventListener('activate', e=>{
    console.log(`activation ${CACHE}`)
    e.waitUntil(
        (async ()=>{
           const keys = await caches.keys()
           await Promise.all(
            keys.map(k=>{
                if( k !== CACHE ) return caches.delete(k)
            })
           )
        })()
    )
})


self.addEventListener('fetch', e=>{
    console.log(`fetch ${CACHE} : ${e.request.destination}`)
    e.respondWith(

        (async ()=>{
           
            if(e.request.destination === 'document'){
                try{
                    return await fetch(e.request)
                }catch (e){
                    const cache = await caches.open(CACHE)
                    return await cache.match('/t/offline.php')
                }
            }else{

                const cache = await caches.open(CACHE)
                return await cache.match(e.request) || fetch(e.request)


            }
                
        
        })()
    )
})