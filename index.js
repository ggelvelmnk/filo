function trocador(){
const body = document.getElementById("body");
const botao = document.getElementById("botao"); 
const bg = document.getElementById("bg");

 if ( botao.value == "white"){
    body.style.backgroundColor= "black";
    body.style.color = "white";
    botao.value = "black";
    bg.style.backgroundColor = "white"
    botao.style.backgroundColor = "white"
    botao.style.color = "black"
 } else {
    body.style.backgroundColor = "white";
    body.style.color = "black"
    bg.style.backgroundColor = "black"
    botao.style.backgroundColor = "black"
    botao.style.color = "white"
    botao.value = "white"
 }
}