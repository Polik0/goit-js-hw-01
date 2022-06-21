let totalPrice = 0;
let credits = 23580;
let pricePerDroid = 3000;
let numberOfDroids = prompt("Введіть к-ть дроїдів, яку ви хочете придбати");
if (numberOfDroids == null) {
  alert("Скасовано користувачем!");
} else {
  totalPrice = pricePerDroid * Number(numberOfDroids);
  if (totalPrice > credits) {
    alert("Недостатньо коштів на рахунку!");
  } else {
    const rest = credits - totalPrice;
    alert(
      "Ви купили " +
        Number(numberOfDroids) +
        " дроїдів, на рахунку залишилося " +
        rest +
        " кредитів."
    );
  }
}
