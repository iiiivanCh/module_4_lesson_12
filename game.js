"use strict";

(() => {
  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      let userStep;
      let userStepRu;
      let machineStep;
      let machineStepRu;

      let userReceipt = prompt('Выберите вариант: "камень", "ножницы", "бумага"');
      if (userReceipt === "null" || userReceipt === null) {
        userReceipt = confirm("Вы точно хотите покинуть игру?");
        if (userReceipt === false) {
          start();
        } else {
          alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
          return;
        }
      }
      let user = userReceipt.trim().toLowerCase();

      const doCheckUser = () => {
        if (user[0] === "к") {
          userStep = "rock";
          userStepRu = "камень"
          console.log(userStep);
          return userStep;
        } else if (user[0] === "н") {
          userStep = "scissors";
          userStepRu = "ножницы"
          console.log(userStep);
          return userStep;
        } else if (user[0] === "б") {
          userStep = "paper";
          userStepRu = "бумага"
          console.log(userStep);
          return userStep;
        } else {
          let userReceipt = prompt('Вы ввели неправильные данные\nВыберите вариант: "камень", "ножницы", "бумага"');
          if (userReceipt === "null" || userReceipt === null) {
            userReceipt = confirm("Вы точно хотите покинуть игру?");
            if (userReceipt === false) {
              start();
            } else {
              alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
              return;
            }
          }
          user = userReceipt.trim().toLowerCase();
          console.log(user);
          doCheckUser();
        }
      };
      doCheckUser();

      const doMachine = (min = 1, max = 3) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let machine = Math.floor(Math.random() * (max - min + 1) + min);
        if (machine === 1) {
          machineStep = "rock";
          machineStepRu = "камень";
          console.log(machineStep);
          return machineStep;
        } else if (machine === 2) {
          machineStep = "scissors";
          machineStepRu = "ножницы";
          console.log(machineStep);
          return machineStep;
        } else {
          machineStep = "paper";
          machineStepRu = "бумага";
          console.log(machineStep);
          return machineStep;
        }
      };
      doMachine();

      const doTotal = (doMachine, doCheckUser) => {
        console.log(machineStep, userStep);
        if (machineStep === userStep) {
          result.player += 1;
          result.computer += 1;
          console.log(result);
          let message = confirm(`Ничья!\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\n
Желаете продолжить игру?\nВы загадали ${userStepRu}\nКомпьютер насчитал ${machineStepRu}`);
          if (message === true) {
            return start();
          } else {
            alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
            return;
          }
        }
        if (
          (machineStep === "rock" && userStep === "scissors") ||
          (machineStep === "paper" && userStep === "rock") ||
          (machineStep === "scissors" && userStep === "paper")
        ) {
          result.computer += 1;
          console.log(result);
          let message = confirm(`Вы проиграли! :(\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\n
Желаете продолжить игру?\nВы загадали ${userStepRu}\nКомпьютер насчитал ${machineStepRu}`);
          if (message === true) {
            return start();
          } else {
            alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
            return;
          }
        }
        if (
          (machineStep === "scissors" && userStep === "rock") ||
          (machineStep === "rock" && userStep === "paper") ||
          (machineStep === "paper" && userStep === "scissors")
        ) {
          result.player += 1;
          console.log(result);
          let message = confirm(`Вы выиграли! :)\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\n
Желаете продолжить игру?\nВы загадали ${userStepRu}\nКомпьютер насчитал ${machineStepRu}`);
          if (message === true) {
            return start();
          } else {
            alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
            return;
          }
        }
      };
      doTotal();
    };
  };

  window.file = game();
})();
