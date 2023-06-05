
module.exports = {

    async validaString(req, res) {
        const { item } = req.body;

        // Verifica se o corpo da solicitação contém um campo 'item' como uma string
        if (typeof item !== 'string') {
          return res.status(400).json({ error: 'O campo "item" deve ser uma string.' });
        }
      
        // Converte as letras minúsculas em maiúsculas e vice-versa
        const convertedItem = item
          .split('')
          .map((letras) => {
            if (letras === letras.toLowerCase()) {
              return letras.toUpperCase();
            } else {
              return letras.toLowerCase();
            }
          })
          .join('');
      
        res.json({ item: convertedItem });
      }   
      
}
