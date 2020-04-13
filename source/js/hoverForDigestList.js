window.addEventListener('load', () => {
	const reverseBtn = document.querySelector('#menu__reverseList')


	const digests = document.querySelectorAll('#digestList .digest');

	[...digests].forEach(elem => {
		// console.log(elem)
		elem.addEventListener('mouseover', hover)
		elem.addEventListener('mouseleave', hoverOut)
	})

	function hover() {
		const not = [...digests].findIndex(elem => elem === this);

		// this.style.transform = 'translateX(5%)';

		[...digests].forEach((elem, ind) => {
			// console.log('elem, ind', elem, ind)

			if (reverseBtn.innerHTML.trim() === 'reverse') {
				if (not !== 0 && not !== digests.length - 1) {
					if (not < ind) {
						elem.style.transform = 'translateX(5%)'
					} else if (not > ind) {
						elem.style.transform = 'translateX(-5%)'
					} else {
						this.style.transform = 'translateX(5%)'
					}
				} else {
					if (not === 0) {
						elem.style.transform = 'translateX(10%)'
					} else {
						if (ind !== not) {
							elem.style.transform = 'translateX(-10%)'
						} else {
							elem.style.transform = 'translateX(-20px)'
						}
					}
				}

			} else {

				if (not !== 0 && not !== digests.length - 1) {
					if (not < ind) {
						elem.style.transform = 'translateX(5%)'
					} else if (not > ind) {
						elem.style.transform = 'translateX(-5%)'
					} else {
						this.style.transform = 'translateX(-5%)'
					}
				} else {
					if (not === digests.length - 1) {
						elem.style.transform = 'translateX(-10%)'
					} else {
						if (ind === not)
							elem.style.transform = 'translateX(20px)'
						else
							elem.style.transform = 'translateX(10%)'
					}
				}

			}


		})
	}

	function hoverOut() {
		[...digests].forEach((elem) => {
			elem.style.transform = 'translateX(0)'
		})
	}
})