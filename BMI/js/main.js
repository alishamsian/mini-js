const form = document.querySelector("form");

const calculateBMI = (weight, height) => {
  height = height / 100;
  let result = weight / (height * height);
  return result.toFixed(2);
};
const clearResult = () => {
  document.querySelector("#result").innerHTML = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearResult();

  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    alert("مقدار نباید خالی باشد");

    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert("مقدار باید به عدد باشد");

    return false;
  }

  if (height < 0 || weight < 0) {
    alert("مقدار نباید منفی باشد");

    return false;
  }

  document.getElementById("result").innerHTML = calculateBMI(weight, height);
});

document.querySelector("input#weight").addEventListener("keydown", clearResult);
document.querySelector("input#height").addEventListener("keydown", clearResult);
