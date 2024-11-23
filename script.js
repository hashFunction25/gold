document
  .getElementById("gold-calculator")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const weight = document.getElementById("weight").value;
    const goldPricePerOunce = 2250;
    // This value can be updated with the current price of gold
  const ouncesPerPound = 16; const goldPricePerPound = goldPricePerOunce * ouncesPerPound; const worthInGold = weight * goldPricePerPound; document.getElementById('result').textContent = `You are worth approximately $${worthInGold.toLocaleString()} in gold!`;
  });

