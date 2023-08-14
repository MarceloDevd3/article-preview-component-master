let btn = document.querySelector(".btn")
let btn1 = document.querySelector(".btn1")
let show = document.querySelector('ul');
let block = document.querySelector('.block');
let share = document.querySelector('.share');

btn.addEventListener('click', () => {
  show.classList.toggle('show-me')
  block.classList.toggle('hidden') 
  share.classList.toggle('hidden') 
  console.log('ola')
})

btn1.addEventListener('click', () => {
  show.classList.toggle('show-me')
  block.classList.remove('hidden') 
  share.classList.remove('hidden') 
  console.log('tchau')
})