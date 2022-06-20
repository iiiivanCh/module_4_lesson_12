"use strict";

(() => {
  const game = (lang) => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      let userStep;
      let userStepRu;
      let userReceipt;
      let machineStep;
      let machineStepRu;
      let message;

      (lang === "EN")
        ? (userReceipt = prompt('Choose an option: "rock", "scissors", "paper"'))
        : (userReceipt = prompt('Выберите вариант: "камень", "ножницы", "бумага"'));
      if (userReceipt === "null" || userReceipt === null) {
        (userReceipt = lang) 
        ? confirm("Are you sure you want to leave the game?") 
        : confirm("Вы точно хотите покинуть игру?");
        if (userReceipt === false) {
          start();
        } else {
          (lang === "EN")
            ? alert(`You have ${result.player} points, the computer has ${result.computer} points`)
            : alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
          return;
        }
      }
      let user = userReceipt.trim().toLowerCase();

      const doCheckUser = () => {
        if (user[0] === "к" || user[0] === "r") {
          userStep = "rock";
          userStepRu = "камень";
          return userStep;
        } else if (user[0] === "н" || user[0] === "s") {
          userStep = "scissors";
          userStepRu = "ножницы";
          return userStep;
        } else if (user[0] === "б" || user[0] === "p") {
          userStep = "paper";
          userStepRu = "бумага";
          return userStep;
        } else {
          (lang === "EN")
          ? userReceipt = prompt('You entered incorrect data\nChoose an option: "rock", "scissors", "paper"')
          : userReceipt = prompt('Вы ввели неправильные данные\nВыберите вариант: "камень", "ножницы", "бумага"');
          if (userReceipt === "null" || userReceipt === null) {
            (lang === "EN")
            ? userReceipt = confirm("Are you sure you want to leave the game?")
            : userReceipt = confirm("Вы точно хотите покинуть игру?");
            if (userReceipt === false) {
              start();
            } else {
              (lang === "EN")
              ? alert(`You have ${result.player} points, the computer has ${result.computer} points`)
              : alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
              return;
            }
          }
          user = userReceipt.trim().toLowerCase();
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
          return machineStep;
        } else if (machine === 2) {
          machineStep = "scissors";
          machineStepRu = "ножницы";
          return machineStep;
        } else {
          machineStep = "paper";
          machineStepRu = "бумага";
          return machineStep;
        }
      };
      doMachine();

      const doTotal = (doMachine, doCheckUser) => {
        if (machineStep === userStep) {
          result.player += 1;
          result.computer += 1;
          (lang === "EN")
          ? message = confirm(`A draw!\n You have ${result.player} points, the computer has ${result.computer} points\n
You made a wish for ${userStepRu}\nThe computer counted ${machineStepRu}\nDo you want to continue the game?`)
          : message = confirm(`Ничья!\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\n
Вы загадали ${userStep}\nКомпьютер насчитал ${machineStep}\nЖелаете продолжить игру?`);
          if (message === true) {
            return start();
          } else {
            (lang === "EN")
            ? alert(`You have ${result.player} points, the computer has ${result.computer} points`)
            : alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
            return;
          }
        }
        if (
          (machineStep === "rock" && userStep === "scissors") ||
          (machineStep === "paper" && userStep === "rock") ||
          (machineStep === "scissors" && userStep === "paper")
          ) {
            result.computer += 1;
            (lang === "EN")
            ? message = confirm(`You've lost :(\n You have ${result.player} points, the computer has ${result.computer} points\n
You made a wish for ${userStep}\nThe computer counted ${machineStep}\nDo you want to continue the game?`)
            : message = confirm(`Вы проиграли! :(\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\n
Вы загадали ${userStepRu}\nКомпьютер насчитал ${machineStepRu}\nЖелаете продолжить игру?`);
                if (message === true) {
                  return start();
                } else {
                  (lang === "EN")
                  ? alert(`You have ${result.player} points, the computer has ${result.computer} points`)
                  : alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
                  return;
                }
              }
              if (
                (machineStep === "scissors" && userStep === "rock") ||
                (machineStep === "rock" && userStep === "paper") ||
                (machineStep === "paper" && userStep === "scissors")
                ) {
                  result.player += 1;
                  (lang === "EN")
          ? message = confirm(`You won! :)\n You have ${result.player} points, the computer has ${result.computer} points\n
You made a wish for ${userStep}\nThe computer counted ${machineStep}\nDo you want to continue the game?`)          
          : message = confirm(`Вы выиграли! :)\nУ Вас ${result.player} очков, у компьютера ${result.computer} очков\n
Вы загадали ${userStepRu}\nКомпьютер насчитал ${machineStepRu}\nЖелаете продолжить игру?`);
          if (message === true) {
            return start();
          } else {
            (lang === "EN")
            ? alert(`You have ${result.player} points, the computer has ${result.computer} points`)
            : alert(`У Вас ${result.player} очков, у компьютера ${result.computer} очков`);
            return;
          }
        }
      };
      doTotal();
    };
  };

  window.file = game();
})();
