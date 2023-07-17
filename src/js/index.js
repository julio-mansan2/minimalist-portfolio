const inputHome = document.querySelector('#home')
const inputPortfolio = document.querySelector('#portfolio')
const inputContact = document.querySelector('#contact')
const labelHome = document.querySelectorAll('.home-label')
const labelPortfolio = document.querySelectorAll('.portfolio-label')
const labelContact = document.querySelectorAll('.contact-label')

const homePage = document.querySelector('.homepage')
const portfolioPage = document.querySelector('.portfolio-page')
const managePage = document.querySelector('.manage-page')
const bookmarkPage = document.querySelector('.bookmark-page')
const insurePage = document.querySelector('.insure-page')
const fyloPage = document.querySelector('.fylo-page')
const contactPage = document.querySelector('.contact-page')

const btnLeft = document.querySelectorAll('.btn-left')
const btnRight = document.querySelectorAll('.btn-right')

const footerHome = document.querySelector('#home-footer')
const footerPortfolio = document.querySelector('#portfolio-footer')
const footerContact = document.querySelector('#contact-footer')

const btnPortfolio = document.querySelector('.btn-portfolio')
const btnContact = document.querySelectorAll('.btn-contact')


const btnManage = document.querySelector('.btn-manage')
const btnBookmark = document.querySelector('.btn-bookmark')
const btnInsure = document.querySelector('.btn-insure')
const btnFylo = document.querySelector('.btn-fylo')


//Form Header

inputHome.addEventListener('click', function () {
    for (let i = 0; i < labelHome.length; i++) {
        if (inputHome.checked) {
            homePage.classList.add('selecionado')
            portfolioPage.classList.remove('selecionado')
            managePage.classList.remove('selecionado')
            bookmarkPage.classList.remove('selecionado')
            insurePage.classList.remove('selecionado')
            fyloPage.classList.remove('selecionado')
            contactPage.classList.remove('selecionado')
            labelHome[i].style.color = 'var(--slightlyDesaturatedCyan)'
            labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
            labelContact[i].style.color = 'var(--grayishDarkBlue)'
        } else if (inputHome.checked === false) {
            homePage.classList.remove('selecionado')
        }
    }
})

inputContact.addEventListener('click', function () {
    for (let i = 0; i < labelContact.length; i++) {
        if (inputContact.checked) {
            homePage.classList.remove('selecionado')
            portfolioPage.classList.remove('selecionado')
            managePage.classList.remove('selecionado')
            bookmarkPage.classList.remove('selecionado')
            insurePage.classList.remove('selecionado')
            fyloPage.classList.remove('selecionado')
            contactPage.classList.add('selecionado')
            labelHome[i].style.color = 'var(--grayishDarkBlue)'
            labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
            labelContact[i].style.color = 'var(--slightlyDesaturatedCyan)'
        } else if (inputContact.checked === false) {
            contactPage.classList.remove('selecionado')
        }
    }
})

inputPortfolio.addEventListener('click', function () {
    for (let i = 0; labelPortfolio.length; i++) {
        if (inputPortfolio.checked) {
            homePage.classList.remove('selecionado')
            portfolioPage.classList.add('selecionado')
            managePage.classList.remove('selecionado')
            bookmarkPage.classList.remove('selecionado')
            insurePage.classList.remove('selecionado')
            fyloPage.classList.remove('selecionado')
            contactPage.classList.remove('selecionado')
            labelHome[i].style.color = 'var(--grayishDarkBlue)'
            labelPortfolio[i].style.color = 'var(--slightlyDesaturatedCyan)'
            labelContact[i].style.color = 'var(--grayishDarkBlue)'
        } else if (inputContact.checked === false) {
            contactPage.classList.remove('selecionado')
        }
    }
})


//Form Footer

footerHome.addEventListener('click', function () {
    if (footerHome.checked) {
        homePage.classList.add('selecionado')
        portfolioPage.classList.remove('selecionado')
        managePage.classList.remove('selecionado')
        bookmarkPage.classList.remove('selecionado')
        insurePage.classList.remove('selecionado')
        fyloPage.classList.remove('selecionado')
        contactPage.classList.remove('selecionado')
        for (let i = 0; i < labelHome.length; i++) {
            labelHome[i].style.color = 'var(--slightlyDesaturatedCyan)'
            labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
            labelContact[i].style.color = 'var(--grayishDarkBlue)'
        }
    } else if (footerHome.checked === false) {
        homePage.classList.remove('selecionado')
    }
})

footerContact.addEventListener('click', function () {
    if (footerContact.checked) {
        homePage.classList.remove('selecionado')
        portfolioPage.classList.remove('selecionado')
        managePage.classList.remove('selecionado')
        bookmarkPage.classList.remove('selecionado')
        insurePage.classList.remove('selecionado')
        fyloPage.classList.remove('selecionado')
        contactPage.classList.add('selecionado')
        for (let i = 0; i < labelContact.length; i++) {
            labelHome[i].style.color = 'var(--grayishDarkBlue)'
            labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
            labelContact[i].style.color = 'var(--slightlyDesaturatedCyan)'
        }
    } else if (footerContact.checked === false) {
        contactPage.classList.remove('selecionado')
    }
})

footerPortfolio.addEventListener('click', function () {
    if (footerPortfolio.checked) {
        homePage.classList.remove('selecionado')
        portfolioPage.classList.add('selecionado')
        managePage.classList.remove('selecionado')
        bookmarkPage.classList.remove('selecionado')
        insurePage.classList.remove('selecionado')
        fyloPage.classList.remove('selecionado')
        contactPage.classList.remove('selecionado')
        for (let i = 0; i < labelPortfolio.length; i++) {
            labelHome[i].style.color = 'var(--grayishDarkBlue)'
            labelPortfolio[i].style.color = 'var(--slightlyDesaturatedCyan)'
            labelContact[i].style.color = 'var(--grayishDarkBlue)'
        }
    } else if (footerContact.checked === false) {
        contactPage.classList.remove('selecionado')
    }
})


// Button Porfolio e Contact

btnPortfolio.addEventListener('click', function () {
    for (let i = 0; i < labelPortfolio.length; i ++) {
        labelHome[i].style.color = 'var(--grayishDarkBlue)'
        labelPortfolio[i].style.color = 'var(--slightlyDesaturatedCyan)'
        labelContact[i].style.color = 'var(--grayishDarkBlue)'
    }
    homePage.classList.remove('selecionado')
    portfolioPage.classList.add('selecionado')
})

btnContact.forEach(contact => {
    contact.addEventListener('click', function () {
        homePage.classList.remove('selecionado')
        portfolioPage.classList.remove('selecionado')
        managePage.classList.remove('selecionado')
        bookmarkPage.classList.remove('selecionado')
        insurePage.classList.remove('selecionado')
        fyloPage.classList.remove('selecionado')
        contactPage.classList.add('selecionado')
        for (let i = 0; i < labelPortfolio.length; i ++) {
            labelHome[i].style.color = 'var(--grayishDarkBlue)'
            labelPortfolio[i].style.color = 'var(--grayishDarkBlue)'
            labelContact[i].style.color = 'var(--slightlyDesaturatedCyan)'
        }
    })
});

// View Project

btnManage.addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.add('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnBookmark.addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.add('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnInsure.addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.add('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnFylo.addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.add('selecionado')
    contactPage.classList.remove('selecionado')
})


// Sliders - Btn Left

btnLeft[0].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.add('selecionado')
    contactPage.classList.remove('selecionado')
})

btnLeft[1].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.add('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnLeft[2].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.add('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnLeft[3].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.add('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

// Sliders - Btn Right

btnRight[0].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.add('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnRight[1].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.add('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

btnRight[2].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.remove('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.add('selecionado')
    contactPage.classList.remove('selecionado')
})

btnRight[3].addEventListener('click', function () {
    homePage.classList.remove('selecionado')
    portfolioPage.classList.remove('selecionado')
    managePage.classList.add('selecionado')
    bookmarkPage.classList.remove('selecionado')
    insurePage.classList.remove('selecionado')
    fyloPage.classList.remove('selecionado')
    contactPage.classList.remove('selecionado')
})

const error = document.querySelectorAll('.error')
const inputEmail = document.querySelector('#email')
const inputName = document.querySelector('#name')
const textArea = document.querySelector('#textarea')
const inputSubmit = document.querySelector('.submit')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if (inputName.value === '') {
        error[0].innerHTML = 'Please, insert a name'
    } else {
        error[0].innerHTML = ''
    }

    if (inputEmail.validity.valid === false || inputEmail.value === '') {
        error[1].innerHTML = 'Please, insert a valid email'
    } else {
        error[1].innerHTML = ''
    }

    if (textArea.value === '') {
        error[2].innerHTML = 'Please, insert a message'
    } else {
        error[2].innerHTML = ''
    }
})

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelector('.menu__box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
        navMenu.classList.add('ocultar')
    }
})