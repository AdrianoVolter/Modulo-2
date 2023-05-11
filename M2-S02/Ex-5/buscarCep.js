

function buscarCEP (cep){

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
    
        if(data.erro){
            console.log('CEP inválido');
            return;
        }else{

        console.log(data);
        console.log(data.logradouro);
        console.log(data.bairro);
        console.log(data.localidade);
        console.log(data.uf);
        console.log(data.ddd);
        console.log(data.ibge);
        console.log(data.gia);
        console.log(data.siafi);
        }
    })
    .catch(error => console.log(error))


    }



module.exports = buscarCEP;