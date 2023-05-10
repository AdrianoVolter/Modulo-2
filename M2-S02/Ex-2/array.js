

function retornaArray(numeros, opcao) {
    switch (opcao) {
        case 1:
            return numeros.filter(function (numero) {
                return numero % 2 !== 0;
            }
            );
        case 2:
            return numeros.filter(function (numero) {
                return numero % 2 === 0;
            }
            );
        case 3:
            return {
                numerosImpares: numeros.filter(function (numero) {
                    return numero % 2 !== 0;
                }
                ),
                numerosPares: numeros.filter(function (numero) {
                    return numero % 2 === 0;
                }
                )
            };
        default:
            return "Opção inválida!";
    }
}

module.exports = retornaArray;

// console.log(retornaArray(numeros, 1));
// console.log(retornaArray(numeros, 2));
// console.log(retornaArray(numeros, 3));
// console.log(retornaArray(numeros, 4));

