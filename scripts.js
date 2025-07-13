const tecla0 = document.getElementById("tecla0")
const tecla1 = document.getElementById("tecla1")
const tecla2 = document.getElementById("tecla2")
const tecla3 = document.getElementById("tecla3")
const tecla4 = document.getElementById("tecla4")
const tecla5 = document.getElementById("tecla5")
const tecla6 = document.getElementById("tecla6")
const tecla7 = document.getElementById("tecla7")
const tecla8 = document.getElementById("tecla8")
const tecla9 = document.getElementById("tecla9")
const limparTexto = document.getElementById("limparText")
const limparCalculo = document.getElementById("limparCalculo")
const backspace = document.getElementById("backspace")
const multiplicar = document.getElementById("multiplicar")
const soma = document.getElementById("somar")
const diminuir = document.getElementById("diminuir")
const dividir = document.getElementById("dividir")
const resultado = document.getElementById("igualdade")
const space = document.getElementById("text")
const virgula = document.getElementById("virgula")

tecla0.addEventListener("click", () => {
    space.textContent += 0
})

tecla1.addEventListener("click", () => {
    space.textContent += 1
})

tecla2.addEventListener("click", () => {
    space.textContent += 2
})

tecla3.addEventListener("click", () => {
    space.textContent += 3
})

tecla4.addEventListener("click", () => {
    space.textContent += 4
})

tecla5.addEventListener("click", () => {
    space.textContent += 5
})

tecla6.addEventListener("click", () => {
    space.textContent += 6
})

tecla7.addEventListener("click", () => {
    space.textContent += 7
})

tecla8.addEventListener("click", () => {
    space.textContent += 8
})

tecla9.addEventListener("click", () => {
    space.textContent += 9
})


dividir.addEventListener("click", () => {
    space.textContent += "/"
})

soma.addEventListener("click", () => {
    space.textContent += "+"
})

multiplicar.addEventListener("click", () => {
    space.textContent += "*"
})

virgula.addEventListener("click", () => {
    space.textContent += "."
})

diminuir.addEventListener("click", () => {
    space.textContent += "-"
})


function se() {

    if (space.textContent.includes("+")) {
        dividir.removeEventListener("click", () => {
            space.textContent += "/";

            multiplicar.removeEventListener("click", () => {
                space.textContent += "*";

                diminuir.removeEventListener("click", () => {
                    space.textContent += "-";
                });
            });
        });
    } else if (space.textContent.includes("-")) {
        dividir.removeEventListener("click", () => {
            space.textContent += "/";

            multiplicar.removeEventListener("click", () => {
                space.textContent += "*";

                soma.removeEventListener("click", () => {
                    space.textContent += "+";
                });
            });
        });
    } else if (space.textContent.includes("/")) {
        multiplicar.removeEventListener("click", () => {
            space.textContent += "*";

            soma.removeEventListener("click", () => {
                space.textContent += "+";

                diminuir.removeEventListener("click", () => {
                    space.textContent += "-";
                });
            });
        });
    } else if (space.textContent.includes("*")) {
        soma.removeEventListener("click", () => {
            space.textContent += "+";

            dividir.removeEventListener("click", () => {
                space.textContent += "/";

                diminuir.removeEventListener("click", () => {
                    space.textContent += "-";
                });
            });
        });
    }
}
