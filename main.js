bodyEl = document.querySelector('body');
bodyEl.style.width = '100vw';
bodyEl.style.height = '100vh';
bodyEl.style.fontFamily = 'segoe UI';
bodyEl.style.cursor = 'pointer'
bodyEl.style.overflow = 'hidden';

wrappyEl = document.querySelector('.wrapper');
wrappyEl.style.width = '50%';
wrappyEl.style.margin = 'auto';

h1El = document.querySelector('h1');
h1El.style.textAlign = 'center';
h1El.style.fontWeight = '500'

h2El = document.querySelector('h2');
h2El.style.textAlign = 'center';
h2El.style.textDecoration = 'underline';
h2El.style.fontWeight = '100';


spanEl = document.querySelector('span');
spanEl.style.fontSize = '5rem';
spanEl.style.fontWeight = 'bold'
const rdcolor = () => {
    spanEl.style.color = '#'+ Math.random().toString(16).substr(2,6)
    asideEl.style.background = '#'+ Math.random().toString(16).substr(2,6);
}
setInterval(rdcolor,1000)

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
let hr = hour < 10 ? `0${hour}`: `${hour}`
const minute = now.getMinutes();
let min = minute < 10 ? `0${minute}`: `${minute}`
const second = now.getSeconds();
let sec = second < 10 ? `0${second}`: `${second}`

const date = `${monthNames[month]} ${day}, ${year} ${hr}:${min}:${sec}`

const asideEl = document.querySelector('aside');
asideEl.innerHTML = date;
asideEl.style.textAlign = 'center';
asideEl.style.width =  'max-content';
asideEl.style.margin = 'auto';
asideEl.style.padding = '0.5rem 1.5rem';
asideEl.style.fontSize = '0.9rem';
asideEl.style.fontWeight = 'bold';

const lisEl = document.querySelectorAll('li');

for(let i=0; i<lisEl.length; i++){
    lisEl[i].style.background = '#eb695b';
    lisEl[i].style.listStyle = 'none';
    lisEl[i].style.marginBottom = '0.2rem';
    lisEl[i].style.padding = '1rem';
    lisEl[0].style.background = '#5bbc7a';
    lisEl[1].style.background = '#f7dc5c';
}