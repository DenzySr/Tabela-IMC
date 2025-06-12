function escopo(){
let vPeso = document.getElementById("input-peso");
let vAltura = document.getElementById("input-altura");

const resultadoD = document.querySelector('.resultado');

const arrayIMC = [16,17,18.4,24.9,25,29.9,30,30.9,35,39.9,40];



function enviarForm(evento){
    evento.preventDefault();
    let resultado = vPeso.value / Math.pow(vAltura.value,2);
    // return resultado
    resultado = resultado.toFixed(1);
    console.log(resultado)

    
    

    resultadoD.innerHTML = `<p class="txtResultado">O seu IMC é: ${resultado}, portanto, você está no estado de</p>`
}

const botaoEnviar = document.querySelector('.btnEnviar')

botaoEnviar.addEventListener('click', enviarForm)


}

escopo();
