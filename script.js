function calcularIMC(){

   // alert('ok');
    /* para criar uma variável pode-se usar 3 modos diferentes
    usando var
    ou usando const que é uma constante e não permite que o valor da variável mude. 
    Se definiu um valor ele será constante Ex: o número do PI nunca varia. 3,141596
    ou usando let
    O let não permite que se crie mais de uma variável com o mesmo nome.
    Ex. let peso
        var peso O programa daria erro. */

    let peso= document.querySelector('#peso').value;
    let altura= document.querySelector('#altura').value;
    let resultado = document.querySelector('#result');

    if(peso !='' && altura != ''){

    

    let imc = peso / (altura*altura);
    // alert(imc.toFixed(1));
    // escrevendo um conteúdo HTML
    resultado.innerHTML = `<h3>Seu IMC é ${imc.toFixed(1)}</h3>`;
    }

    else{
        alert('Preencha todos os campos !');
    }
}