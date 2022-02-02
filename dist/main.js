// import moment from 'moment';

const number = document.querySelector('.num');
const start = document.querySelector('.start');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const line = document.querySelector('.second__line');

let counter = 0;
number.textContent = counter;

plus.addEventListener('click', () => (number.textContent = ++counter));
minus.addEventListener('click', () => (number.textContent = --counter));

start.addEventListener('click', () => {
  plus.classList.add('hidden');
  minus.classList.add('hidden');
  start.classList.add('hidden');
  line.textContent = 'Осталось';

  const duration = moment.duration(counter * 60, 'seconds');
  const timer = setInterval(() => {
    duration.subtract(1000, 'milliseconds');

    if (duration <= 0) {
      plus.classList.remove('hidden');
      minus.classList.remove('hidden');
      start.classList.remove('hidden');
      clearInterval(timer);
      alert('Время закончилось');
    } else {
      number.textContent = moment(duration.asMilliseconds()).format('mm:ss');
    }
  }, 1000);
});
