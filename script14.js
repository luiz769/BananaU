function calcular(operacao) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por Favor, insira números válidos.';
    } else {
        switch (operacao) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num2 !== 0 ? num1 / num2 : 'Divisão por zero não é permitida.';
                break;
            default:
                resultado = 'Operação Inválida';
        }
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
