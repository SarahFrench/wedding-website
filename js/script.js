// Event listeners on the burger menu icon
document.addEventListener('DOMContentLoaded', () => {
    const openClass = 'nav-mobile__menu--open'
    
    const mobileMenu = document.getElementById('nav-mobile-menu')
    const menuButton = document.getElementById('nav-mobile-menu-button')
    let menuOpen = false;

    const toggleMenu = (event) => {
        event.stopPropagation()
        if(!menuOpen){
            mobileMenu.classList.add(openClass)
            menuOpen = true
        } else {
            mobileMenu.classList.remove(openClass)
            menuOpen = false
        }
    }
    
    // Clicking buttons can open/close mobile menu
    menuButton.addEventListener('click', toggleMenu)
    
    // Clicking links in the mobile menu closes the menu
    const mobileMenuLinks = document.getElementsByClassName('nav-mobile__link')
    for (let i = 0; i < mobileMenuLinks.length; i++){
        mobileMenuLinks[i].addEventListener('click', toggleMenu)
    }

})

// Burger menu icon animation
document.addEventListener('DOMContentLoaded', () => {

    const openClass = 'nav-mobile__burger--open'
    const menuButton = document.getElementById('nav-mobile-menu-button')
    let menuOpen = false

    const toggleBurger = (event) => {
        event.stopPropagation()
        if(!menuOpen){
            menuButton.classList.add(openClass)
            menuOpen = true
        } else {
            menuButton.classList.remove(openClass)
            menuOpen = false
        }
    }

    // Clicking the burger menu toggles it from burger to X symbol
    menuButton.addEventListener('click', toggleBurger)

    // Clicking links in the mobile menu closes the menu
    const mobileMenuLinks = document.getElementsByClassName('nav-mobile__link')
    for (let i = 0; i < mobileMenuLinks.length; i++){
        mobileMenuLinks[i].addEventListener('click', toggleBurger)
    }
})