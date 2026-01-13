let userNumber1 = Number(prompt("Ingresa un numero:"));
let userNumber2 = Number(prompt("Ingresa otro numero:"));
let userNumber3 = Number(prompt("Ingresa otro numero:"));
let userNumbers = [userNumber1, userNumber2, userNumber3];

console.log(userNumber1, userNumber2, userNumber3);

if ( userNumber1 === userNumber2 && userNumber1 === userNumber3){
    console.log(`Los números son iguales:`)
}

const compareNumbers = (a, b) => b - a;

userNumbers.sort(function (b, a){
    return a - b;
})

console.log(userNumbers.join(", "));
   
