// let total = 0;
// let enterNumber;

// do {
//   enterNumber = prompt("Введіть число");
//   if (isNaN(enterNumber)) {
//     console.log('NaN');
//     alert('Не число, спробуйте ще раз');
//     continue;
//   }
//   total += Number(enterNumber);
// } while (enterNumber !== null);

// alert("Загальна сума чисел дорівнює ", total);

// let total = 0;
// for (
//   let input = prompt('Введіть число');
//   input !== null;
//   input = prompt('Введіть число');
// ) {
//   if (isNaN(input)) {
//     alert('Не число, спробуйте ще раз');
//     continue;
//   }

//   total += Number(input);
// }

// alert("Загальна сума чисел дорівнює ", total);

let input = prompt("Введіть число");
let total = 0;
while (input !== null) {
  if (isNaN(input)) {
    alert("Не число, спробуйте ще раз");
    continue;
  }

  total += Number(input);
  input = prompt("Введіть число");
}

alert("Загальна сума чисел дорівнює ", total);
