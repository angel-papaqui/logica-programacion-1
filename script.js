function ordenarNumeros() {
    const userNumber1 = Number(document.getElementById("num-1").value);
    const userNumber2 = Number(document.getElementById("num-2").value);
    const userNumber3 = Number(document.getElementById("num-3").value);
    const userNumbers = [userNumber1, userNumber2, userNumber3];
    const userNumbers2 = [userNumber1, userNumber2, userNumber3];

    if (userNumber1 === userNumber2 && userNumber1 === userNumber3) {
        document.getElementById("numeros-ordenados").innerHTML = `Los números son iguales: ${userNumbers.join(", ")}`;
    } else{
        
        /* function mayorAMenor(a, b) {
            return a - b;
        }
        
        const compareNumbers = (a, b) => b - a;

        userNumbers.sort(mayorAMenor);
        userNumbers2.sort(compareNumbers); */

    /* userNumbers.sort((b, a) => a - b);
    userNumbers2.sort((a, b) => b - a); */

        userNumbers.sort(function(a,b){
            return b - a;
        })

        userNumbers2.sort(function(a,b){
            return a - b;
        })



    const text = `Los números ordenados de mayor a menor son: ${userNumbers.join(", ")} <br> Y de menor a mayor son: ${userNumbers2.join(", ")}`
    document.getElementById("numeros-ordenados-mayor-a-menor").innerHTML = text;

    /* const text2 = ``
    document.getElementById("numeros-ordenados-menor-a-mayor").innerHTML = text2;
    } */

    }
}

    





