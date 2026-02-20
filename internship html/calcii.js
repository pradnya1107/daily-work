document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('inputbox');
    let buttons = document.querySelectorAll('button');
    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (input.value.length > 10) {
                input.style.fontSize = '16px';
            } else {
                input.style.fontSize = '40px';
            }

            if (e.target.innerHTML === "=") {
                try {
                    string = eval(string).toString();
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            } else if (e.target.innerHTML === 'AC') {
                string = "";
                input.value = string;
            } else if (e.target.innerHTML === "DEL") {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });

    document.getElementById('plus_min').addEventListener('click', () => {
        if (string) {
            const number = parseFloat(string);
            string = (number * -1).toString();
            input.value = string;
        }
    });
});
