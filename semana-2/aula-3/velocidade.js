function velocidade( velVeiculo) {
    let velPermitida = 100;
    const porcentagem = (velVeiculo - velPermitida) / velPermitida * 100;
  
    if (porcentagem <= 0) {
      return 'sem multa';

    } else if (porcentagem <= 20) {
      return 'multa leve';
      
    } else {
      return 'multa grave';
    }
  }
  
  module.exports = velocidade;
  