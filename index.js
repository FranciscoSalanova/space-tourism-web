const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

// when someone clicks on the hamburguer button
navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible')
  // if the menu is closed, open it
  if (visibility === 'false') {
    nav.setAttribute('data-visible', 'true')
    navToggle.setAttribute('aria-expanded', 'true')
  } else {
    nav.setAttribute('data-visible', 'false')
    navToggle.setAttribute('aria-expanded', 'false')
  }
  // if the menu is opened, close it
})
