function showTimerIcon(){
  const badge = document.createElement("div"); 
  badge.classList.add("lhg-time-tracker", "type--caption");
  badge.textContent = `⏱️ Track Time`;


  // Process Gmail
  const subjectDiv = document.querySelector("div.ha");
  if(subjectDiv){
    // Get Subject Line 
    const subjectLine  = document.querySelector("div.ha > h2");
    if(subjectLine){
      badge.setAttribute("task-title",subjectLine.innerHTML);
    }
    subjectDiv.insertAdjacentElement("afterend", badge);
  }

  // Process Calender
  const allEvents = document.querySelectorAll("div.lFe10c");
  console.log("allEvents", allEvents);
  if(allEvents){
    allEvents.forEach(box => {
      box.addEventListener('click', function handleClick(event) {
        console.log('event clicked', event); 
        setTimeout(function(){
          // box.setAttribute('style', 'background-color: yellow;');
          const eventTopBox = document.querySelector("div.wv9rPe");
          if(eventTopBox){
            console.log("eventTopBox", eventTopBox);
            badge.setAttribute('style', 'color: black;'); 
            eventTopBox.appendChild(badge);
          }
        }, 1000);
      });
    });
  } 

}
setTimeout(showTimerIcon, 2000);

function setTimerOnCalenderEvent(){
  const eventTopBox = document.querySelector("div.wv9rPe");
  if(eventTopBox){
    console.log("eventTopBox", eventTopBox);
  }
}

// 04:48 - 18:50

// showTimerIcon();
