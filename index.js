// This project is live at https://replit.com/@thebtechviral/marktwoByAadhar?embed=1&output=1

const readlineSync = require('readline-sync');
const chalk = require('chalk');

let userName = readlineSync.question('Hey Champion , what is your name \n', {
    defaultInput: 'firefox'
  });


console.log(chalk.magentaBright.bold(`\nSo ${userName} ,brace yourself for the quiz on Indian Comedians !!\n`));

console.log('|---------------------------------------------|');
console.log('|  RULES : +1 for correct , -1 for wrong      |');
console.log('|  Reach LEVEL 2 once score reaches 5         |');
console.log('|  ReachLEVEL 3 once score reaches 15         |');
console.log('|  Game Over if you drop to previous level    |');
console.log('|  Or Score drops below Zero                  |');
console.log('|---------------------------------------------|');


let start = readlineSync.question('\nReady (yes/no) \n');
let level = 'LVL 01 :';
if(start!='yes'){
   process.exit(0); 
}
let score = 0;

let lvl1flag = true;
let lvl2flag = false;
let lvl3flag = false;
