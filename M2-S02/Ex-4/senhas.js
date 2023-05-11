function gerarSenha() {
    let senha = ''
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 10; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return senha
}

module.exports = gerarSenha