let game = alert("Welcome to Magic Ball !");
let yourName = prompt("Enter ur Name")

let userName = yourName;
userName = true ?console.log("hello," + userName):console.log("hello !");
let userQuestion = alert('Will I become a werewolf tonight?');
userQuestion = "Will I become a werewolf tonight?"
const randomNumber =(Math.floor(Math.random()* 7));
let eightBall = (randomNumber);
switch(eightBall) {
case 0:
eightBall = 'It is certain';
break;
case 1:
eightBall = 'It is decidedly so';
break;
case 2:
eightball = "Reply hazy try again";
break;
case 3:
eightBall = 'Cannot predict now';
break;
case 4:
eightBall = "Dont count on it";
break;
case 5:
eightBall = "My sources say no";
break;
case 6:
eightBall = "Outlook not so good";
break;
case 7:
  eightBall = "Signs point to yes";
  break;
  }
  document.write('The User Asked: ' + userQuestion + "<br>","<br>");
  "<br>"
  document.write('The Magic Eight Ball answered: ' + eightBall + " , " + yourName);

  console.log('The User Asked: ' + userQuestion + "<br>");

  console.log('The Magic Eight Ball answered: ' + eightBall + " , " + yourName);
