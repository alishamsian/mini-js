const selectMenu = document.querySelectorAll("select");
const timeBox = document.querySelector(".time");
const setAlarm = document.querySelector(".set-alarm");

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;

  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectMenu[0].appendChild(option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
  
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectMenu[1].appendChild(option);
  }

  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    timeBox.textContent = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;

  } , 1000);

  setAlarm.addEventListener("click", () => {
    const selectedHours = selectMenu[0].value;
    const selectedMinutes = selectMenu[1].value;
  

    console.log(selectedHours, selectedMinutes);

    if (selectedHours === "Hour" || selectedMinutes === "Minute") {
      alert("Please select the time");
      return;
    }
  
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    if (selectedHours == hours && selectedMinutes == minutes) {
      alert("Time to wake up!");
    }
  } );