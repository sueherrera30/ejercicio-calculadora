
var operadores=["+","-","*","/"];

function mostrar(valor){
var input = document.getElementById('resultado');
input.value += valor;
}

function limpiar() {
var borrar = document.getElementById('resultado');
 borrar.value = "";
 }

   function almacenar(){
   var valor=document.getElementById("resultado").value;
   var almacen = valor.split("+");// aqui planeaba poner la variable de operaciones para que agregara el simbolo correspondiente ;s
   almacen.push("+");
   console.log(almacen);
 }

 /*function operaciones(){

 var longitud = operadores.length;
for(var i=0;longitud;i++){
   if(longitud[i]== "+"){
     var suma = num1 + num2;
     }
 else if(longitud[i]== "-") {
  var resta= num1 - num2;
     }
 else if(longitud[i]== "*") {
  var multiplicar = num1 * num2;
     }
 else if(longitud[i]== "/") {
  var dividir = num1 / num2;
    }
  }
}*/
