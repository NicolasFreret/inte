export default function main(){

	const header = document.querySelector('header'),
	mainNavLinks = [...header.querySelectorAll('nav > ul > li')],
	hbg = header.querySelector('#hbg')

	hbg.addEventListener('click', e=>{
		header.classList.toggle('open')
	})

	mainNavLinks.forEach( function(link, index) {
		link.addEventListener('click',e=>{
			const isOpen = mainNavLinks.find( l=> l.classList.contains('open') &&  !e.currentTarget.classList.contains('open') )
			!!(isOpen) ? isOpen.classList.remove('open') : ''
			e.currentTarget.classList.toggle('open')
		})
	});

}

export function wordsTyping(_container,_wordsArray,_speed=500){

	
	const wordContainer = document?.querySelector(_container),
	words = _wordsArray

	let wordIndex = 0
	
	if( !(!!(wordContainer))) return

	function removeLetter(){
		let word = wordContainer.innerText,
		letterIndex = -1,
		interval

		interval = setInterval(()=>{
			wordContainer.innerText=""
			wordContainer.innerText = word.slice(0,letterIndex--)
			if( Math.abs(letterIndex) == word.length + 1 ){
				clearInterval(interval)
				wordIndex++
				if( !( !!(words[wordIndex]) ) ){
					wordIndex = 0
					addWordLetter(words[wordIndex])
					return
				} 

				addWordLetter(words[wordIndex])
			}
			
		},_speed)

	}

	function addWordLetter(_currentWord){
		let letterIndex = 0,
		interval

		interval = setInterval(()=>{
			wordContainer.append( _currentWord.slice(letterIndex, ++letterIndex) )
			if( letterIndex > _currentWord.length){
				clearInterval(interval)
				setTimeout(()=>{
					removeLetter()
				},1000)
			}
		},_speed)
		
	}



	addWordLetter(words[wordIndex])
	
}

export function filter(_filterButtons,_cardsToFilter){
    
    const cards = [...document.querySelectorAll(_cardsToFilter)],
    filters = [...document.querySelectorAll(_filterButtons)]

	filters.forEach(btn=>{
		btn.addEventListener('click', (e) =>{
			e.preventDefault()
			const selected = btn.dataset.filter
			cards.forEach(c=>{
				c.style.display = c.classList.contains(selected) ? 'flex' : 'none'
			})
			filters.find(f=>f.classList.contains('active')).classList.remove('active')
			btn.classList.add('active')
		})
	})


}