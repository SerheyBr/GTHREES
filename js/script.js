//burger menu
const burgrerMenuBtnClose = document.querySelector('.burger-button')
const burgrerMenuBtnOpen = document.querySelector('.burger-menu__btn')
const burgerMenu = document.querySelector('.burger-menu')

const openBurgerMenu = () => {
	document.body.style.overflow = 'hidden'
	burgerMenu.classList.add('active')
}

const closeBurgerMenu = () => {
	document.body.style.overflow = 'visible'
	burgerMenu.classList.remove('active')
}

burgrerMenuBtnClose.addEventListener('click', (e) => {
	openBurgerMenu()
})

burgrerMenuBtnOpen.addEventListener('click', (e) => {
	closeBurgerMenu()
})

//dropdown
const header = document.querySelector('.header')

header.addEventListener('click', (e) => {
	console.log(e)
})

