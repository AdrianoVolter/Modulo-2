function somar(a, b){
    return a + b;
  }
  
  function subtrair(a, b){
    return a - b;
  }
  
  function multiplicar(a, b){
    return a * b;
  }
  
  function dividir(a, b){
    if (b === 0) {
        throw new Error('Não é possível dividir por zero');
    }
    return a / b;
  }
  
module.exports = {somar, subtrair, multiplicar, dividir};
