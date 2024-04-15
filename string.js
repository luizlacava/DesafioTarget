const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

rl.question('Digite uma string para reverter: ', (input) => {
  const reversedString = reverseString(input);
  console.log('String revertida:', reversedString);
  rl.close();
});