const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function updateClock(){
  const currentDate = new Date();
  setTimeout(updateClock, 1000)
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  // console.log(hour,minute,second); this 
  // looks ok but our clock is analog so we
  //  have to convert from digital to analog
  const hourDeg = (hour / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondDeg = (second / 60) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`
  secondEl.style.transform = `rotate(${secondDeg}deg)`
}

updateClock()