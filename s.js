"use strict";

const doMachine = (min = 1, max = 3) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const doUser = () => {
  let userStep;
  let userReceipt = prompt('Выберите вариант: "камень", "ножницы", "бумага"');
  if (userReceipt === "null" || userReceipt === null) {
    userReceipt = confirm("Вы точно хотите покинуть игру?");
    if (userReceipt === false) {
      doUser();
    } else {
      alert(`У Вас  очков, у компьютера  очков`);
      return;
    }
  }
  let user = userReceipt.trim().toLowerCase();
  const doCheckUser = () => {
    if (user.charAt(0) === "к") {
      userStep = "rock";
      console.log(userStep);
      return;
    } else if (user.charAt(0) === "н") {
      userStep = "scissors";
      console.log(userStep);
      return;
    } else if (user.charAt(0) === "б") {
      userStep = "paper";
      console.log(userStep);
      return;
    } else {
      let userReceipt = prompt('Вы ввели неправильные данные\nВыберите вариант: "камень", "ножницы", "бумага"');
      let user = userReceipt.trim().toLowerCase();
      console.log(user);
      doCheckUser();
    }
  };
  doCheckUser();
  return userStep;
};

console.log(doMachine());
console.log(doUser());
