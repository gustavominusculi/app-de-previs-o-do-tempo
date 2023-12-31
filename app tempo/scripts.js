

const key="47a31d38864d7917ba2952219a6d0092"

function colocarDados(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Humidade " + dados.main.humidity + "%"
    document.querySelector(".vento").innerHTML = "Velocidade do vento " + dados.wind.speed + "Km"
    document.querySelector(".img-previsao") .src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}



async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    
    colocarDados(dados)
  }
  



function clicarNobotao(){
    const cidade = document.querySelector(".input-cidade").value 

    buscarCidade(cidade)

    
}