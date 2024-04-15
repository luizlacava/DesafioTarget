//EXECUTAR PELO TERMINAL

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= number) {
        if (next === number) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}

rl.question('Digite um número para verificar se está na sequência de Fibonacci: ', (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log('Por favor, digite um número válido.');
  } else {
    if (isFibonacci(number)) {
        console.log(`${number} faz parte da sequência de Fibonacci.`);
    } else {
        console.log(`${number} não faz parte da sequência de Fibonacci.`);
    }
  }

  rl.close();
});