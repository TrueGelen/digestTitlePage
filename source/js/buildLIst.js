import buildDigestListElements from './coreTabs'

window.addEventListener('load', () => {

	document.querySelector('#inpTabs').addEventListener('input', (e) => {

		e.target.value = Math.max(Math.min(e.target.value, 15), 1)

		buildDigestListElements()
	})


	const reverseBtn = document.querySelector('#menu__reverseList')

	reverseBtn.addEventListener('click', () => {
		console.log('click')
		if (reverseBtn.innerHTML.trim() === 'reverse')
			reverseBtn.innerHTML = 'reverse to def'
		else
			reverseBtn.innerHTML = 'reverse'

		buildDigestListElements()
	})


	buildDigestListElements()
})