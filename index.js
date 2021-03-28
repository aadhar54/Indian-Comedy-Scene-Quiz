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

function play(question , correctAnsIndex, optionArray){
    
    if(score>=15){
        if(score === 15 && lvl3flag!=true){
            console.log(chalk.cyan.bold('\nFantastic ,Welcome to the Third Level'));
        }
        lvl3flag = true;
        level = 'LVL 03 :';
    }else if(score>=5){
        if(score === 5 && lvl2flag!=true){
            console.log(chalk.cyan.bold('\nAwesome ,Welcome to the Second Level'));
        }
        lvl2flag = true;
        level = 'LVL 02 :';

        //checking if score has plunged from third lvl to second lvl
        if(lvl3flag == true){
            console.log(chalk.bgBlack.red.bold('\n\nFINAL SCORE : '+score+' Better Luck Next Time Passing Level 3\n'));
            process.exit();
        }
        
    }
    else if(score<5){
        //checking if score has plunged from second lvl to first lvl
        if(lvl2flag == true){
            console.log(chalk.bgBlack.red.bold('\n\nFINAL SCORE : '+score+' Better Luck Next Time Passing Level 2\n'));
            process.exit();
        }
        level = 'LVL 01 :';
    }
       let userAnsIndex = readlineSync.keyInSelect(optionArray,chalk.bgBlueBright.bold(level+" "+question));
       // the functionlaity of the readlineSync.keyInSelect is that it will subtract the index you enter by 1
       // Also , correctAnsIndex is the index from the array not from the choices
       if(userAnsIndex === correctAnsIndex){
            score++;
            console.log(chalk.green.bold(`CORRECT ; D Score rises up to ${score}\n\n`));
       }else if(userAnsIndex === -1){
           console.log(chalk.bold.gray(`\n\nWe are sad you have to go ${userName},BYE and Tc \n`));
           process.exit(0);
       }
       else{
            score--;
            if(score<0){
                console.log(chalk.bgBlack.red.bold('\n\nFINAL SCORE : '+score+' Better Luck Next Time Passing Level 1\n'));
                process.exit();
            }
            console.log(chalk.red.bold(`\nINCORRECT ; ( Score goes down to ${score}\n\n`));
            
       }
       console.log(chalk.bold.yellowBright('-----NEXT QUESTION----- : \n'));
}

console.log(chalk.cyan.bold('\nWelcome to the First Level\n'));

play('Which Indian Comic has three Netflix Specials on record ?\n',1,['Zakhir Khan','Vir Das','Aadar Malik','Naveen Richards']);
play('Which is the most Political Comedian?\n',3,['Neeti Palta','Arvind Sa','Aadar Malik','Kunal Kamra']);
play('Who is the Indori Comedian?\n',2,['Arvind Sa','Neeti Palta','Zakhir Khan','Kunal Kamra']);
play('Which of these comedians have a very successful MTV career ?\n',0,['Cyrus Brocha','Kapil Sharma','Aadar Malik','Urooj Ashfaq']);
play('Which of these comedians wrote AIB and Son of Abish ?\n',3,['Cyrus Brocha','Abhishek Upmanyu','Rajeev Thakur','Urooj Ashfaq']);
play('Who among the following is a cofounder of WeirdAss Productions ?\n',2,['Abhish Mathew','Tanmay Bhat','Sorabh Pant','Kapil Sharma']);
play('Wife of which of these comedians have dubbed for Shinchan ?\n',0,['Rajat Chauhan','Abhishek Upmanyu','Sorabh Pant','Kenny Sebastian']);
play('Whom among the following cofounded AIB ?\n',1,['Zakir Khan','Rohan Joshi','Biswa Kalyan Rath','Kenny Sebastian']);
play('Which Comedy collective is responsible for Honest Engineering Series?\n',2,['EIC','SNG','AIB','OML']);
play('Which of the comedians worked for the Mahendra group before making it big in Comedy?\n',0,['Rahul Subramanian','Naveen Richards','Prashashti Singh','Rahul Dua']);
play('Which of the comedians was jailed for 30 days straight ?\n',1,['Rahul Subramanian','Munawar Faaruqui','Prashashti Singh','Sumayra Sheik']);
play('Who is the belovedly called The Mast Aadmi among all ?\n',0,['Biswa Kalyan Rath','Tanmay Bhat','Gursimran Khamba','Rahul Subramanian']);
play('Naacho Best Hai : Who is the one to make this line etched in comedy ?\n',1,['Gursimran Khamba','Rahul Dua','Kanan Gill','Rahul Subramanian']);
play('Which of these comics won the Golden Play Button in youtube just with one standup video ?\n',3,['Kenny Sebastian','Rahul Dua','Kanan Gill','Sai Kiran']);
play('Which of these women comics have been the protaganist for the sereis BEHTI NAAK ?\n',3,['Neeti Palta','Kaneez Sarkar','Urooj Ashfaq','Sumukhi Suresh']);
play('Which comedian is a lawyer with a degree in Chemistry and also from Meerut ?\n',2,['Rajat Chauhan','Ashish Shakya','Anubhav Singh Bassi','Sumit Anand']);

play('Which comedian was the partner in crime with Biswa for Pretencious Movie Reviews ?\n',3,['Kumar Varun','Rahul Subramanian','Anubhav Singh Bassi','Kanan Gill']);

play('Which comedian has been a brand manager for DBS Bank?\n',0,['Kumar Varun','Ashish Shakya','Rahul Subramanian','Sumit Anand']);

play('Who is a comedian from IIT ?\n',2,['Rajat Chauhan','Ashish Shakya','Biswa Kalyan Rath','Sumit Anand']);

play('Who is the winner of Comicstan 2 ?\n',1,['Akash Gupta','Biswa Kalyan Rath','Anubhav Singh Bassi','Rahul Subramanian']);

console.log('Congratulations you completed the quiz, your score is '+score+' You are a Mast Aadmi like Biswa');