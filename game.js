"use strict";

(() => {
  const game = (lang) => {
    const result = {
      player: 0,
      computer: 0,
    };

    let value;
    let report;
    let userStep;
    let machineStep;
    let doCheckUser;
    let doMachine;

    if (lang === "EN") {
      value = ["rock", "scissors", "paper"];
      report = {
        userReceipt: 'Choose an option: "rock", "scissors", "paper"',
        quit: "Are you sure you want to leave the game?",
        exit: `You have ${result.player} points, the computer has ${result.computer} points`,
        userError: `You entered incorrect data\nChoose an option: "rock", "scissors", "paper"`,
        messageDraw: `A draw!\n You have ${result.player} points, the computer has ${result.computer} points\nYou made a wish for ${doCheckUser}\nThe computer counted ${doMachine}\nDo you want to continue the game?`,
        messageRout: `You've lost :(\n You have ${result.player} points, the computer has ${result.computer} points\nYou made a wish for ${doCheckUser}\nThe computer counted ${doMachine}\nDo you want to continue the game?`,
        messageVictory: `You won! :)\n You have ${result.player} points, the computer has ${result.computer} points\nYou made a wish for ${doCheckUser}\nThe computer counted ${doMachine}\nDo you want to continue the game?`,
      };
    } else {
      value = ["камень", "ножницы", "бумага"];
      report = {
        userReceipt: 'Выберите вариант:  "камень", "ножницы", "бумага"',
        quit: "Вы точно хотите покинуть игру?",
        exit: `У Вас ${result.player} очков, у компьютера ${result.computer} очков`,
        userError: 'Вы ввели неправильные данные\nВыберите вариант: "камень", "ножницы", "бумага"',
        messageDraw: `Ничья!\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\nВы загадали ${doCheckUser}\nКомпьютер насчитал ${doMachine}\nЖелаете продолжить игру?`,
        messageRout: `Вы проиграли! :(\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\nВы загадали ${doCheckUser}\nКомпьютер насчитал ${doMachine}\nЖелаете продолжить игру?`,
        messageVictory: `Вы выиграли! :)\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\nВы загадали ${doCheckUser}\nКомпьютер насчитал ${doMachine}\nЖелаете продолжить игру?`,
      };
    }

    return function start() {
      let userReceipt;
      let message;

      userReceipt = prompt(report.userReceipt);
      if (userReceipt === "null" || userReceipt === null) {
        confirm(report.quit);
        if (userReceipt === false) {
          start();
        } else {
          alert(report.exit);
          return;
        }
      }
      let user = userReceipt.trim().toLowerCase();

      doCheckUser = () => {
        if (user[0] === "к" || user[0] === "r") {
          userStep = value[0];
          console.log(userStep);
          return userStep;
        } else if (user[0] === "н" || user[0] === "s") {
          userStep = value[1];
          console.log(userStep);
          return userStep;
        } else if (user[0] === "б" || user[0] === "p") {
          userStep = value[2];
          console.log(userStep);
          return userStep;
        } else {
          userReceipt = prompt(report.userError);
          if (userReceipt === "null" || userReceipt === null) {
            userReceipt = confirm(report.quit);
            if (userReceipt === false) {
              start();
            } else {
              alert(report.exit);
              return;
            }
          }
          user = userReceipt.trim().toLowerCase();
          doCheckUser();
        }
      };
      doCheckUser();

      doMachine = (min = 1, max = 3) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const machine = Math.floor(Math.random() * (max - min + 1) + min);
        if (machine === 1) {
          machineStep = value[0];
          console.log(machineStep);
          return machineStep;
        } else if (machine === 2) {
          machineStep = value[1];
          console.log(machineStep);
          return machineStep;
        } else {
          machineStep = value[2];
          console.log(machineStep);
          return machineStep;
        }
      };
      doMachine();

      const doTotal = () => {
        if (machineStep === userStep) {
          console.log(machineStep, userStep);
          console.log(result);
          result.player += 1;
          result.computer += 1;
          console.log(result);
          message = confirm(report.messageDraw);
          if (message === true) {
            return start();
          } else {
            alert(report.exit);
            return;
          }
        }
        if (
          (machineStep === value[0] && userStep === value[1]) ||
          (machineStep === value[2] && userStep === value[0]) ||
          (machineStep === value[1] && userStep === value[2])
        ) {
          console.log(machineStep, userStep);
          console.log(result);
          result.computer += 1;
          console.log(result);
          console.log(report);
          message = confirm(report.messageRout);
          if (message === true) {
            return start();
          } else {
            alert(report.exit);
            return;
          }
        }
        if (
          (machineStep === value[1] && userStep === value[0]) ||
          (machineStep === value[0] && userStep === value[2]) ||
          (machineStep === value[2] && userStep === value[1])
        ) {
          console.log(machineStep, userStep);
          console.log(result);
          result.player += 1;
          console.log(result);
          console.log(report);
          message = confirm(report.messageVictory);
          if (message === true) {
            return start();
          } else {
            alert(report.exit);
            return;
          }
        }
      };
      doTotal();
    };
  };

  window.file = game();
})();
