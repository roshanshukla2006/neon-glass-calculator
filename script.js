
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "AC") {
            expression = "";
            display.value = "";
            return;
        }

        if (value === "⌫") {
            expression = expression.slice(0, -1);
            display.value = expression;
            return;
        }

        if (value === "=") {

            if (expression === "") return;

            try {

                let exp = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                let result = eval(exp);

                display.value = result;
                expression = result.toString();

            } catch {

                display.value = "Error";
                expression = "";

            }

            return;
        }

        expression += value;
        display.value = expression;

    });

});

document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (!isNaN(key) || key === ".") {
        expression += key;
    }

    else if (key === "+") {
        expression += "+";
    }

    else if (key === "-") {
        expression += "-";
    }

    else if (key === "*") {
        expression += "×";
    }

    else if (key === "/") {
        e.preventDefault();
        expression += "÷";
    }

    else if (key === "%") {
        expression += "%";
    }

    else if (key === "Backspace") {
        expression = expression.slice(0, -1);
    }

    else if (key === "Delete") {
        expression = "";
    }

    else if (key === "Enter") {

        e.preventDefault();

        try {

            let exp = expression
                .replace(/×/g, "*")
                .replace(/÷/g, "/");

            let result = eval(exp);

            expression = result.toString();

        } catch {

            expression = "";
            display.value = "Error";
            return;

        }

    }

    display.value = expression;

});