// Mostra e esconde menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// Esconde menu quando é clicado em alguma opção
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}