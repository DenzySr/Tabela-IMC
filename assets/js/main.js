function escopo(){
let vPeso = document.getElementById("input-peso");
let vAltura = document.getElementById("input-altura");

const resultadoD = document.querySelector('.resultado');


function enviarForm(evento){
    evento.preventDefault();
    const peso = Number(vPeso.value);
    const altura = Number(vAltura.value);

    const imc = getIMC(peso, altura);   

    const estadoImc = getEstadoImc(imc);
    resultadoD.innerHTML = `<p class="txtResultado">O seu IMC é: ${imc}, portanto, você está no estado de ${estadoImc}</p>`;
}

function getIMC(peso, altura){
    const imc = peso / Math.pow(altura,2);
    return imc.toFixed(1);
}

function getEstadoImc (imc){
    const nivel = ['Magreza grave', 'Magreza moderada', 'Magreza leve', 'Peso Ideal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 40) return nivel[7];
    if(imc >= 35) return nivel[6];
    if(imc >= 30) return nivel[5];
    if(imc >= 25) return nivel[4];
    if(imc >= 18.5) return nivel[3];
    if(imc >= 17) return nivel[2];
    if(imc >= 16) return nivel[1];
    if(imc < 16) return nivel[0];
}

const botaoEnviar = document.querySelector('.btnEnviar')

botaoEnviar.addEventListener('click', enviarForm)


}

escopo();
