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

    if (lang === "ENG") {
      value = ["rock", "scissors", "paper"];
      report = {
        one: "r",
        two: "s",
        three: "p",
        userReceipt: 'Choose an option: "rock", "scissors", "paper"',
        quit: "Are you sure you want to leave the game?",
        exit01: "You have",
        exit02: " points, the computer has ",
        exit03: "points",
        userError: `You entered incorrect data\nChoose an option: "rock", "scissors", "paper"`,
        messageDraw01: "A draw!\n You have ",
        messageRout01: "You've lost :(\n You have ",
        messageVictory01: "You won! :)\n You have ",
        messageGeneral02: " points, the computer has ",
        messageGeneral03: " points\nYou made a wish for ",
        messageGeneral04: "\nThe computer counted ",
        messageGeneral05: "\nDo you want to continue the game?",
      };
    } else {
      value = ["камень", "ножницы", "бумага"];
      report = {
        one: "к",
        two: "н",
        three: "б",
        userReceipt: 'Выберите вариант:  "камень", "ножницы", "бумага"',
        quit: "Вы точно хотите покинуть игру?",
        exit01: "У Вас ",
        exit02: " очков, у компьютера ",
        exit03: " очков",
        userError: 'Вы ввели неправильные данные\nВыберите вариант: "камень", "ножницы", "бумага"',
        messageDraw01: "Ничья!\nУ Вас ",
        messageRout01: "Вы проиграли! :(\nУ Вас ",
        messageVictory01: "Вы выиграли! :)\nУ Вас ",
        messageGeneral02: " очков, у компьютера ",
        messageGeneral03: " очков\nВы загадали ",
        messageGeneral04: "\nКомпьютер насчитал ",
        messageGeneral05: "\nЖелаете продолжить игру?",
      };
    }

    return function start() {
      let userReceipt;
      let message;

      const query = (userReceipt) => {
        if (userReceipt === "null" || userReceipt === null) {
          userReceipt = confirm(report.quit);
          if (userReceipt === false) {
            start();
          } else {
            let words = `${report.exit01} ${result.player} ${report.exit02} ${result.computer} ${report.exit03}`;
            alert(words);
          }
        }
      };

      userReceipt = prompt(report.userReceipt);
      query(userReceipt);

      let user = userReceipt.trim().toLowerCase();

      doCheckUser = () => {
        if (user[0] === report.one) {
          userStep = value[0];
          return userStep;
        } else if (user[0] === report.two) {
          userStep = value[1];
          return userStep;
        } else if (user[0] === report.three) {
          userStep = value[2];
          return userStep;
        } else {
          userReceipt = prompt(report.userError);
          query(userReceipt);

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
          return machineStep;
        } else if (machine === 2) {
          machineStep = value[1];
          return machineStep;
        } else {
          machineStep = value[2];
          return machineStep;
        }
      };
      doMachine();

      const request = (message) => {
        if (message) {
          return start();
        } else {
          let words = `${report.exit01} ${result.player} ${report.exit02} ${result.computer} ${report.exit03}`;
          alert(words);
          machineStep = 100;
          userStep = 200;
          return;
        }
      };

      function doTotal() {
        if (machineStep === userStep) {
          result.player += 1;
          result.computer += 1;
          let words = `${report.messageDraw01} ${result.player} ${report.messageGeneral02} ${result.computer} ${report.messageGeneral03} ${userStep} ${report.messageGeneral04} ${machineStep} ${report.messageGeneral05}`;
          message = confirm(words);
          request(message);
        }
        if (
          (machineStep === value[0] && userStep === value[1]) ||
          (machineStep === value[2] && userStep === value[0]) ||
          (machineStep === value[1] && userStep === value[2])
        ) {
          result.computer += 1;
          let words = `${report.messageRout01} ${result.player} ${report.messageGeneral02} ${result.computer} ${report.messageGeneral03} ${userStep} ${report.messageGeneral04} ${machineStep} ${report.messageGeneral05}`;
          message = confirm(words);
          request(message);
        }
        if (
          (machineStep === value[1] && userStep === value[0]) ||
          (machineStep === value[0] && userStep === value[2]) ||
          (machineStep === value[2] && userStep === value[1])
        ) {
          result.player += 1;
          let words = `${report.messageVictory01} ${result.player} ${report.messageGeneral02} ${result.computer} ${report.messageGeneral03} ${userStep} ${report.messageGeneral04} ${machineStep} ${report.messageGeneral05}`;
          message = confirm(words);
          request(message);
        }
      }
      doTotal();
    };
  };

  window.file = game;
})();
