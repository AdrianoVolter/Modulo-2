module.exports = {

    async recebaLista (req, res) {

        let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
        const { nomes } = req.body

        //// Regra 1: Trocar a posição do índice 0 por qualquer outro item da lista

        if(nomes.includes(lista[0] && nomes.length > 1)){
            const index = nomes.indexOf(lista[0])
            const indexAleatorio = Math.floor(Math.random() * (nomes.length - 1)) + 1;
            [nomes[0], nomes[indexAleatorio]] = [nomes[indexAleatorio], nomes[0]]
            //console.log(nomes)
       } 
       // Regra 2: Colocar o 'Danilo' no topo da lista, trocando de lugar com o 'Pedro'

        if(nomes.includes(lista[0] && nomes.length > 1)){
            const daniloIndex = nomes.indexOf('Danilo')
            const pedroIndex = nomes.indexOf('Pedro')
            [nomes[daniloIndex], nomes[0]] = [nomes[0], nomes[daniloIndex]]
            [nomes[pedroIndex], nomes[1]] = [nomes[1], nomes[pedroIndex]]
            //console.log(nomes)
            }
        // Regra 3: Verificar se algum nome não pertence à lista

        const nomesInvalidos = nomes.filter(nome => !lista.includes(nome))
        if(nomesInvalidos.length > 0){
            const mensagem = `Os nomes ${nomesInvalidos} não pertencem à lista`
            return res.status(400).json(mensagem)
        }

        lista = nomes
        return res.status(200).json(lista)
        
    },

    async listarData (req, res) {
        const  mes  = parseInt(req.params.mes)
        const  ano  = new Date().getFullYear()

        if(mes < 1 || mes > 12){
            return res.status(400).json({error: 'Mês inválido'})
        }

        const diaDoMes = new Date(ano, mes ,0).getDate()
        const datas = []

        for (let dia = 1; dia <= diaDoMes; dia++) {
            const data = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`
            datas.push(data)
        }

        res.status(200).json(datas)
        

    }
    
}
    
