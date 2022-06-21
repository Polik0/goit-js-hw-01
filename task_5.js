let country = prompt("Введіть країну доставки");
let price = 0;
let checkCountry = country.toLowerCase();

switch (checkCountry) {
  case "китай":
    price = 100;
    country = "Китай";
    alert("Доставка в " + country + " буде коштувати " + price + " кредитів");
    break;
  case "чилі":
    price = 250;
    country = "Чилі";
    alert("Доставка в " + country + " буде коштувати " + price + " кредитів");
    break;
  case "австралія":
    price = 170;
    country = "Австралію";
    alert("Доставка в " + country + " буде коштувати " + price + " кредитів");
    break;
  case "індія":
    price = 80;
    country = "Індію";
    alert("Доставка в " + country + " буде коштувати " + price + " кредитів");
    break;
  case "ямайка":
    price = 120;
    country = "Ямайку";
    alert("Доставка в " + country + " буде коштувати " + price + " кредитів");
    break;
  default:
    alert("У вашій країні доставка недоступна");
    break;
}
