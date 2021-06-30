function saudacao(nome){
    return function (req, res, next){
        console.log(`ola, seja bem vindo ${nome}.`)
        next()
    }
}

module.exports = saudacao