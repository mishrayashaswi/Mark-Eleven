const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkNumBtn = document.querySelector("#check-num");
const outputBox = document.querySelector("#output");

function compareValues(sum, luckyNum) {
  if (sum % luckyNum === 0) {
    outputBox.innerText = "Your birthday is Lucky!!🤩";
  } else {
    outputBox.innerText = "Its not a Lucky Number, please keep smiling !!🙃";
  }
}

function checkIsLucky() {
  const dob = birthDate.value;
  const sum = sumAll(dob);
  if (sum && dob) compareValues(sum, luckyNum.value);
  else outputBox.innerText = "please enter both the field!!";
}

function sumAll(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumBtn.addEventListener("click", checkIsLucky);