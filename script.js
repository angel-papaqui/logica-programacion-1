function ordenarNumeros() {
    const userNumber1 = Number(document.getElementById("num-1").value);
    const userNumber2 = Number(document.getElementById("num-2").value);
    const userNumber3 = Number(document.getElementById("num-3").value);
    const userNumbers = [userNumber1, userNumber2, userNumber3];

    if (userNumber1 === userNumber2 && userNumber1 === userNumber3) {
        document.getElementById("numeros-ordenados").innerHTML = `Los números son iguales: ${userNumbers.join(", ")}`;
    } else{
        const compareNumbers = (a, b) => b - a;

    userNumbers.sort((b, a) => a - b);

    const text = `Los números ordenados de mayor a menor son: ${userNumbers.join(", ")}`
    document.getElementById("numeros-ordenados").innerHTML = text;
    }

}



