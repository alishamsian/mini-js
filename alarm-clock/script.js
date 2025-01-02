const selectMenu = document.querySelectorAll("select");

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
