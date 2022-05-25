window.addEventListener('DOMContentLoaded', () => {
    const BurgerListeners = () => {
        let navToggle = document.querySelector('#navToggle')
        let overlay = document.querySelector('.overlay')
        let body = document.querySelector('body')
        let links = document.querySelectorAll('.header-link')

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active')
            overlay.classList.toggle('open')
            body.classList.toggle('locked')
        })

        links.forEach(link => {
            link.addEventListener('click', e => {
                navToggle.classList.remove('active')
                overlay.classList.remove('open')
            })
        })
    }

    const UrlCleanup = () => {
        window.location.replace('#')

        if (typeof window.history.replaceState == 'function') {
            history.replaceState({}, '', window.location.href.slice(0, -1))
        }
    }

    BurgerListeners()
    UrlCleanup()
})