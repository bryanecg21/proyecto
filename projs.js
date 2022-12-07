function calcularIMC() {

    let altura = parseFloat(document.getElementById("height").value);
    let peso = parseFloat(document.getElementById("weight").value);
    let resultado = "";


    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById("mensajeerror").innerHTML = "No has introducido bien los datos";
    } else {
        let imc = (peso / Math.pow(altura, 2));

        resultado = imc;
        if (imc < 16.00) {
            document.getElementById("mensajeerror").innerHTML = "Infrapeso (delgadez severa)";


        } else if (imc >= 16.00 && imc <= 16.99) {

            document.getElementById("mensajeerror").innerHTML = "Infrapeso (delgadez moderada)";


        } else if (imc >= 17.00 && imc <= 18.49) {
            document.getElementById("mensajeerror").innerHTML = "Infrapeso (delgadez aceptable)";


        } else if (imc >= 18.50 && imc <= 24.99) {
            document.getElementById("mensajeerror").innerHTML = "Peso normal";


        } else if (imc >= 25.00 && imc <= 29.99) {
            document.getElementById("mensajeerror").innerHTML = "Sobrepeso";


        } else if (imc >= 30.00 && imc <= 34.99) {
            document.getElementById("mensajeerror").innerHTML = "Obeso tipo 1";



        } else if (imc >= 35.00 && imc <= 40.00) {
            document.getElementById("mensajeerror").innerHTML = "Obeso Tipo 2";


        } else {
            document.getElementById("mensajeerror").innerHTML = "Obeso tipo 3";

        }
    }

}