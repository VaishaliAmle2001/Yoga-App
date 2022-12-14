const startMin = 2;
let time  = startMin*60;

const countDown = document.getElementById('count1');

setInterval(updateCount,1000);
function updateCount()
{

  const min = math.floor(time/60);
  let sec = time % 60;
  //sec = sec < 2 ? '0' + sec:sec;
  countDown.innerHTML = `${min}:${sec}`;
  t--;
}