// Função que gera números aleatórios
function generateNumber() {
    // Mapeando o input do primeiro valor e fazendo o uso do Math.ceil
    const min = Math.ceil(document.querySelector(".input-min").value)
    // Mapeando o input do segundo valor e fazendo o uso do Math.floor
    const max = Math.floor(document.querySelector(".input-max").value)
    // Se o primeiro número for menor que o segundo pode prosseguir
    if (min < max) {
        // Gera um número inteiro aleatório dentro do intervalo [min, max]
        const result = Math.floor(Math.random() * (max - min + 1) + min)
        // Exibe o número gerado em um alerta na tela
        alert(result)
    } else {
        // Exibe o texto abaixo autoexplicativo 
        alert("O primeiro número precisa ser menor que o segundo")
    }

}