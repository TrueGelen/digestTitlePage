export function getPropertyOfElement(element, property) {
	if (element.style[property] === '') {
		return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
	}
	else
		return element.style[property]
}

export default function buildDigestListElements() {
	const digestList = document.querySelector('#digestList')
	const widthOfDigestList = digestList.getBoundingClientRect().width
	// const heightOfDigestList = digestList.getBoundingClientRect().height
	// console.log('widthOfDigestList: ', widthOfDigestList)


	const revBtn = document.querySelector('#menu__reverseList')
	const tabsAmount = document.querySelector('#inpTabs').value


	const elements = digestList.querySelectorAll('.digest')
	// console.log('elements.length:', elements.length)
	//что ниже вернуть
	// const stepTo = (widthOfDigestList / elements.length) / widthOfDigestList * 100
	//это удалить
	const stepTo = (widthOfDigestList / tabsAmount) / widthOfDigestList * 100
	// const stepTop = (heightOfDigestList / elements.length) / heightOfDigestList * 100
	// console.log('step: ', step)


	if (revBtn.innerHTML.trim() === 'reverse') {
		[...elements].forEach(elem => {
			elem.style.right = ''

			const month = elem.querySelector('.digest__month')
			if (month.style.right !== '') {
				month.style.left = `${getPropertyOfElement(month, 'right')}`
				month.style.right = 'auto'
			}
		})


		let totLeft = stepTo;

		for (let i = 0; i < elements.length; i++) {
			elements[i].style.left = `${totLeft - 100}%`
			elements[i].style.zIndex = `${elements.length - i}`

			window.setTimeout(() => {
				elements[i].style.top = '0'
				// console.log('setTimeout:', 400 / (elements.length - i))
			}, (i + 1) * 50)

			totLeft += stepTo


			//это удалить
			if (i >= tabsAmount) {
				// console.log('from if', i, tabsAmount, elements[i])
				elements[i].style.display = 'none'
			} else {
				elements[i].style.display = ''
			}
		}

	} else {
		[...elements].forEach(elem => {
			elem.style.left = ''

			const month = elem.querySelector('.digest__month')
			month.style.right = `${getPropertyOfElement(month, 'left')}`
			month.style.left = 'auto'
		})

		let totRight = stepTo;

		for (let i = elements.length - 1; i >= 0; i--) {
			elements[i].style.right = `${totRight - 100}%`
			elements[i].style.zIndex = `${i}`

			window.setTimeout(() => {
				elements[i].style.top = '0'
				// console.log('setTimeout:', 400 / (elements.length - i))
			}, (i + 1) * 50)

			totRight += stepTo

			//это удалить
			if (i < elements.length - tabsAmount) {
				elements[i].style.display = 'none'
			} else {
				elements[i].style.display = ''
			}
		}
	}
}