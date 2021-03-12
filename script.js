const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['red', 'yellow', '#f12e12', '#121212'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
  let random = Math.floor(Math.random()*colors.length);
  bodyBcg.style.backgroundColor = colors[random];
};