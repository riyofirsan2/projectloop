let inputNumber = 5;
let numOfFactorial = 1;

for (i=0; i < inputNumber; i++) {
    numOfFactorial = numOfFactorial * (inputNumber - i);
    console.log(inputNumber - i);

}

console.log('Factorial ' + inputNumber + ' is = ' + numOfFactorial)