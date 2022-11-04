var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('value');
        switch (value) {
            case '+':

                operator = '+';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";
                break;

            case '-':
                operator = '-';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";
                break;

            case '*':
                operator = '*';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";
                break;

            case '/':
                operator = '/';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";
                break;

            case '%':
                operator = '%';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";
                break;

            case '=':
                operand2 = parseFloat(display.textContent);
                var res = eval(operand1 + " " + operator + " " + operand2);
                display.textContent = res;
                operand1 = result;
                operand2 = null;
                operator = null;
                break;

            case 'clear':
                display.textContent = "";
                break;

            case 'decimal':
                    display.textContent=display.textContent+".";
                    break;

            default:
                display.innerText += value;
                break;
        }

    });
}