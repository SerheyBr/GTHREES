AOS.init({
   duration: 500,
})

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

//tabs
const partnersTabsButtons = document.querySelectorAll('.partners-tabs__tab')
const partnersTabsContent = document.querySelectorAll('.partners-tabs__content')

const removeActiveClasses = () => {
   partnersTabsButtons.forEach((el) => el.classList.remove('active'))
   partnersTabsContent.forEach((el) => el.classList.remove('active'))
}

const setActiveTab = (elemen, contentId) => {
   elemen.classList.add('active')

   const content = document.getElementById(contentId)

   if (content) {
      content.classList.add('active')
   }
}

partnersTabsButtons.forEach((el) => {
   el.addEventListener('click', (e) => {
      const tab = e.currentTarget
      const tabId = tab.dataset.tab

      removeActiveClasses()
      setActiveTab(tab, tabId)
   })
})

//acordeon
const questionsAccordionItems = document.querySelectorAll(
   '.questions-accordion__item',
)

const closeAll = () => {
   questionsAccordionItems.forEach((el) => {
      el.classList.remove('active')
   })
}

const openSelectedItem = (tab) => {
   closeAll()
   tab.classList.toggle('active')
}

const closeSelectedItem = (tab) => {
   tab.classList.toggle('active')
}

questionsAccordionItems.forEach((el) => {
   el.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('active')) {
         closeSelectedItem(e.currentTarget)
      } else {
         openSelectedItem(e.currentTarget)
      }
   })
})
//animation map main page
document.addEventListener('DOMContentLoaded', (event) => {
   document.querySelectorAll('.map-dot').forEach((dot) => {
      const delay = gsap.utils.random(0, 6)
      const animeitDotMd = gsap.timeline({ repeat: -1, delay, yoyo: true })
      animeitDotMd
         .from(dot.querySelector('.map-dot__sm'), { scale: 0.2, duration: 2 })
         .from(dot.querySelector('.map-dot__md'), { scale: 0, duration: 2 })
         .to(dot.querySelector('.map-dot__sm'), { scale: 1, duration: 1 })
         .to(dot.querySelector('.map-dot__md'), { scale: 1, duration: 1 })
         .to(
            dot.querySelector('.map-dot__text'),
            { opacity: 1, duration: 1 },
            '-=2',
         )
         .to({}, { duration: 2 })
   })
})
