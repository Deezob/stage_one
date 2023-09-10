function showDay() {
  const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  }
  
  let today = new Date();
  
  for (let [key, value] of Object.entries(days)){
    if(today.getDay() == value){
      let addDay = document.createTextNode(key);
      let para1 = document.querySelector('p[data-testid="currentDayOfTheWeek"]');
      para1.appendChild(addDay)
    }
  }
  
}

function showSecs(){
  const currentUTCTimeMilliseconds = new Date().getTime();
  let addMilliSecs = document.createTextNode(currentUTCTimeMilliseconds + 'ms');
  let para2 = document.querySelector('p[data-testid="currentUTCTime"]');
  para2.appendChild(addMilliSecs )
}
showDay();
showSecs()












