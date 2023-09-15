const pages = {
  home: document.querySelector('.homepage'),
  portfolio: document.querySelector('.portfolio-page'),
  manage: document.querySelector('.manage-page'),
  bookmark: document.querySelector('.bookmark-page'),
  insure: document.querySelector('.insure-page'),
  fylo: document.querySelector('.fylo-page'),
  contact: document.querySelector('.contact-page'),
};

const inputs = {
  home: document.querySelector('#home'),
  portfolio: document.querySelector('#portfolio'),
  contact: document.querySelector('#contact'),
};

const labels = {
  home: document.querySelectorAll('.home-label'),
  portfolio: document.querySelectorAll('.portfolio-label'),
  contact: document.querySelectorAll('.contact-label'),
};

const footerButtons = {
  home: document.querySelector('#home-footer'),
  portfolio: document.querySelector('#portfolio-footer'),
  contact: document.querySelector('#contact-footer'),
};

const buttons = {
  portfolio: document.querySelector('.btn-portfolio'),
  contact: document.querySelectorAll('.btn-contact'),
  manage: document.querySelector('.btn-manage'),
  bookmark: document.querySelector('.btn-bookmark'),
  insure: document.querySelector('.btn-insure'),
  fylo: document.querySelector('.btn-fylo'),
};

const btnLeft = document.querySelectorAll('.btn-left');
const btnRight = document.querySelectorAll('.btn-right');

function updatePages(selectedPage, selectedLabelColor) {

  for (const pageName in pages) {
    if (pages.hasOwnProperty(pageName)) {
      const page = pages[pageName];
      page.classList.remove('selecionado');
    }
  }
  selectedPage.classList.add('selecionado');

  for (const labelName in labels) {
    if (labels.hasOwnProperty(labelName)) {
      const label = labels[labelName];
      for (let i = 0; i < label.length; i++) {
        label[i].style.color = selectedLabelColor;
      }
    }
  }
}

function handleInputClick(input, selectedPage, selectedLabelColor) {
  input.addEventListener('click', function () {
    if (input.checked) {
      updatePages(selectedPage, selectedLabelColor);
    }
  });
}

function handleFooterButtonClick(footerButton, selectedPage, selectedLabelColor) {
  footerButton.addEventListener('click', function () {
    if (footerButton.checked) {
      updatePages(selectedPage, selectedLabelColor);
    }
  });
}

function handleButton(button, selectedPage, selectedLabelColor) {
  button.addEventListener('click', function () {
    updatePages(selectedPage, selectedLabelColor);
  });
}

// Handle inputs
handleInputClick(inputs.home, pages.home, 'var(--slightlyDesaturatedCyan)');
handleInputClick(inputs.portfolio, pages.portfolio, 'var(--slightlyDesaturatedCyan)');
handleInputClick(inputs.contact, pages.contact, 'var(--slightlyDesaturatedCyan)');

// Handle footer buttons
handleFooterButtonClick(footerButtons.home, pages.home, 'var(--slightlyDesaturatedCyan)');
handleFooterButtonClick(footerButtons.portfolio, pages.portfolio, 'var(--slightlyDesaturatedCyan)');
handleFooterButtonClick(footerButtons.contact, pages.contact, 'var(--slightlyDesaturatedCyan)');

// Handle buttons
handleButton(buttons.portfolio, pages.portfolio, 'var(--slightlyDesaturatedCyan)');
buttons.contact.forEach((contactButton) => {
  handleButton(contactButton, pages.contact, 'var(--slightlyDesaturatedCyan)');
});
handleButton(buttons.manage, pages.manage, 'var(--slightlyDesaturatedCyan)');
handleButton(buttons.bookmark, pages.bookmark, 'var(--slightlyDesaturatedCyan)');
handleButton(buttons.insure, pages.insure, 'var(--slightlyDesaturatedCyan)');
handleButton(buttons.fylo, pages.fylo, 'var(--slightlyDesaturatedCyan)');


btnLeft[0].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.remove('selecionado')
  bookmarkPage.classList.remove('selecionado')
  insurePage.classList.remove('selecionado')
  fyloPage.classList.add('selecionado')
})

btnLeft[1].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.add('selecionado')
  bookmarkPage.classList.remove('selecionado')
  insurePage.classList.remove('selecionado')
  fyloPage.classList.remove('selecionado')
})

btnLeft[2].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.remove('selecionado')
  bookmarkPage.classList.add('selecionado')
  insurePage.classList.remove('selecionado')
  fyloPage.classList.remove('selecionado')
})

btnLeft[3].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.remove('selecionado')
  bookmarkPage.classList.remove('selecionado')
  insurePage.classList.add('selecionado')
  fyloPage.classList.remove('selecionado')
})

// Sliders - Btn Right

btnRight[0].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.remove('selecionado')
  bookmarkPage.classList.add('selecionado')
  insurePage.classList.remove('selecionado')
  fyloPage.classList.remove('selecionado')
})

btnRight[1].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.remove('selecionado')
  bookmarkPage.classList.remove('selecionado')
  insurePage.classList.add('selecionado')
  fyloPage.classList.remove('selecionado')
})

btnRight[2].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.remove('selecionado')
  bookmarkPage.classList.remove('selecionado')
  insurePage.classList.remove('selecionado')
  fyloPage.classList.add('selecionado')
})

btnRight[3].addEventListener('click', function () {
  portfolioPage.classList.remove('selecionado')
  managePage.classList.add('selecionado')
  bookmarkPage.classList.remove('selecionado')
  insurePage.classList.remove('selecionado')
  fyloPage.classList.remove('selecionado')
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

