const numbersContainer = document.getElementById("numbers-container");
for (let i = 0; i < 5; i++) {
  const numbers = [];
  while (numbers.length < 6) {
    const random = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }
  const numberSet = document.createElement("div");
  numberSet.classList.add("number-set");
  numbers.forEach(number => {
    const numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.textContent = number;
    numberSet.appendChild(numberSpan);
  });
  if (i % 5 === 0) {
    const lineBreak = document.createElement("br");
    numbersContainer.appendChild(lineBreak);
  }
  numbersContainer.appendChild(numberSet);
}