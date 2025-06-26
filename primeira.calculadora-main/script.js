function soma(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let soma_numero = numero_um + numero_dois;

    document.getElementById('resultado').textContent = 'resulatdo: ' + soma_numero;



}
function subtrair(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);


    let subtrai_numero = numero_um - numero_dois;

    document.getElementById('resultado'). textContent = 'resultado: ' + subtrai_numero;
}
function multiplicar(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);


    let multiplicar_numero = numero_um * numero_dois;

    document.getElementById('resultado'). textContent = 'resultado: ' + multiplicar_numero;


}
function dividir(){

    let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
    let numero_dois = parseFloat(document.getElementById('segundo_numero').value);

    if(numero_dois == 0){
        alert("não é possivel dividir o número por 0");
        return;
    }

    let dividir_numero = numero_um / numero_dois;

    document.getElementById('resultado'). textContent = 'resultado: ' + dividir_numero;


}
function comparação(){
let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
    let numero_dois = parseFloat(document.getElementById('segundo_numero').value);
if(numero_um > numero_dois){
     document.getElementById('resultado'). textContent = "O maior é " + numero_um;
    return;
}else if(numero_dois > numero_um){
      document.getElementById('resultado'). textContent = "O maior é " + numero_dois;
    return;
}else{
     document.getElementById('resultado'). textContent = "São iguais";
}





}