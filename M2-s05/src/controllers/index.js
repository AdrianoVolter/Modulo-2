module.exports = {

    async recebaLista (req, res) {
        let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
        if(!lista){
             res.status(404).json({error: 'Lista não encontrada'}
            )
        }
        res.status(200).json(lista)
        console.log("Lista recebida com sucesso")
        

       
    },
}
    