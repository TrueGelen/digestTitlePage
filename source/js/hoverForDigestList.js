import buildDigestListElements from './coreTabs'

window.addEventListener('load', () => {
	const reverseBtn = document.querySelector('#menu__reverseList');

	[...document.querySelectorAll('#menu__btnhov')].forEach(btn => {
		btn.addEventListener('click', () => {
			[...document.querySelectorAll('#menu__btnhov')].forEach(btn => btn.classList.remove('menu__btnhov_enabled'))
			btn.classList.add('menu__btnhov_enabled');
			setHoverToggle()
		})
	})
	const hoverToggle = {
		variant1: false,
		variant2: false
	}

	function setHoverToggle() {
		const btns = document.querySelectorAll('#menu__btnhov');
		let variant = null;
		[...btns].forEach((btn, i) => {
			variant = btn.classList.contains('menu__btnhov_enabled') ? i : variant
		})
		Object.keys(hoverToggle).forEach((key, i) => {
			if (i === variant)
				hoverToggle[key] = true
			else
				hoverToggle[key] = false
		})

		setEventListeners()

		// console.log('hoverToggle', hoverToggle)
		// console.log('variant', variant)
		// console.log('btns', btns)
	}

	setHoverToggle()


	const digests = document.querySelectorAll('#digestList .digest');

	function setEventListeners() {
		[...document.querySelectorAll('#digestList .digest')].forEach(elem => {
			// console.log(elem)
			if (hoverToggle.variant1) {
				elem.removeEventListener('mouseover', hover2)
				elem.removeEventListener('mouseleave', hoverOut2)

				elem.addEventListener('mouseover', hover)
				elem.addEventListener('mouseleave', hoverOut)
			} else if (hoverToggle.variant2) {
				[...document.querySelectorAll('#digestList .digest')].forEach(elem => elem.style.transform = 'translateX(0)')
				elem.removeEventListener('mouseover', hover)
				elem.removeEventListener('mouseleave', hoverOut)

				elem.addEventListener('mouseover', hover2)
				elem.addEventListener('mouseleave', hoverOut2)
			}
		})
	}


	function hover() {
		const not = [...digests].findIndex(elem => elem === this);
		const tabsAmount = document.querySelector('#inpTabs').value;

		// this.style.transform = 'translateX(5%)';

		[...digests].forEach((elem, ind) => {
			// console.log('elem, ind', elem, ind)

			if (tabsAmount >= ind) {

				if (reverseBtn.innerHTML.trim() === 'reverse') {

					if (not !== 0 && not !== tabsAmount - 1) {
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

					if (not !== 0 && not !== tabsAmount - 1) {
						if (not < ind) {
							elem.style.transform = 'translateX(5%)'
						} else if (not > ind) {
							elem.style.transform = 'translateX(-5%)'
						} else {
							this.style.transform = 'translateX(-5%)'
						}
					} else {
						if (not === tabsAmount - 1) {
							elem.style.transform = 'translateX(-10%)'
						} else {
							if (ind === not)
								elem.style.transform = 'translateX(20px)'
							else
								elem.style.transform = 'translateX(10%)'
						}
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


	function hover2() {
		const not = [...digests].findIndex(elem => elem === this);
		const tabsAmount = document.querySelector('#inpTabs').value;

		// this.style.transform = 'translateX(5%)';

		[...digests].forEach((elem, ind) => {
			// console.log('elem, ind', elem, ind)
			// const halfWidth = window.innerWidth / 100 * 50
			// const digestAmount

			if (tabsAmount >= ind) {

				if (reverseBtn.innerHTML.trim() === 'reverse') {

					if (not !== 0 && not !== tabsAmount - 1) {
						if (not < ind) {
							elem.style.left = `${(50 + (50 / (tabsAmount) * (ind + 1))) - 100}%`
						} else if (not > ind) {
							elem.style.left = `${(50 / (tabsAmount) * (ind + 1)) - 100}%`
						} else {
							this.style.left = `${(50 + (50 / (tabsAmount) * (ind)) + 50 / (tabsAmount)) - 100}%`
						}
					} else {
						if (not === 0) {
							if (ind === 0)
								elem.style.left = `${(50 + (50 / (tabsAmount))) - 100}%`
							else
								elem.style.left = `${(50 + (50 / (tabsAmount) * (ind + 1))) - 100}%`
						} else {
							if (ind !== not) {
								elem.style.left = `${((50 / (tabsAmount) * (ind + 1))) - 100}%`
							} else {
								elem.style.left = '-20px'
							}
						}
					}

				} else {

					if (not !== 0 && not !== tabsAmount - 1) {
						if (not < ind) {
							elem.style.left = elem.style.left = `${(50 + (50 / (tabsAmount) * (ind + 1)))}%`
						} else if (not > ind) {
							elem.style.left = `${(50 / (tabsAmount) * (ind + 1)) - 100}%`
						} else {
							this.style.left = `${(50 + (50 / (tabsAmount) * (ind)) + 50 / (tabsAmount))}% `
						}
					} else {
						if (not === tabsAmount - 1) {
							elem.style.transform = 'translateX(-10%)'
						} else {
							if (ind === not)
								elem.style.transform = 'translateX(20px)'
							else
								elem.style.transform = 'translateX(10%)'
						}
					}

				}
			}
		})
	}

	function hoverOut2() {
		console.log('here')
		buildDigestListElements()
	}
})