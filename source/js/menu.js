window.addEventListener('load', () => {
	const menu = document.querySelector('.menu')
	const digests = document.querySelectorAll('#digestList .digest')

	function getPropertyOfElement(element, property) {
		if (element.style[property] === '') {
			return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
		}
		else
			return element.style[property]
	}

	window.addEventListener('mousemove', (e) => {
		if (e.clientY < 50) {
			menu.style.transform = 'translateY(0)'
		} else {
			menu.style.transform = ''
		}
	})

	const brInp = document.querySelector('#inpBr')
	brInp.value = parseInt(getPropertyOfElement(digests[0], 'border-radius'))

	brInp.addEventListener('input', (e) => {
		[...digests].forEach(elem => {
			elem.style.borderRadius = `${e.target.value}px`
		})
	})
})