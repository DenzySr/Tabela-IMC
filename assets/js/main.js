function escopo(){
let vPeso = document.getElementById("input-peso");
let vAltura = document.getElementById("input-altura");

const resultadoD = document.querySelector('.resultado');

const arrayIMC = [16,17,18.4,24.9,25,29.9,30,30.9,35,39.9,40];



function enviarForm(evento){
    evento.preventDefault();
    const peso = Number(vPeso.value);
    const altura = Number(vAltura.value);
    const imc = getIMC(peso, altura);   


    resultadoD.innerHTML = `<p class="txtResultado">O seu IMC é: ${imc}, portanto, você está no estado de</p>`
}

function getIMC(peso, altura){
    const imc = peso / Math.pow(altura,2);
    return imc.toFixed(1);
}

function getEstadoImc (imc){

}

const botaoEnviar = document.querySelector('.btnEnviar')

botaoEnviar.addEventListener('click', enviarForm)


}

escopo();
