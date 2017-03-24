
// var operadores=["+","-","*","/"];

function mostrar(valor){
var input = document.getElementById('operaciones');
input.value += valor;
}

function limpiar() {
var borrar = document.getElementById('operaciones');
 borrar.value = "";
 }

   function almacenar(){
     var numeros =document.getElementById("operaciones").value;
     var respuesta = document.getElementById('resultado');
     var almacen = numeros.split("+");
     var suma= Number(almacen[0]) + Number(almacen [1]);
     respuesta.value = suma;

        //  case resta:
        //  var numeros =document.getElementById("operaciones").value;
        //  var respuesta = document.getElementById('resultado');
        // var almacen = numeros.split("-");
        //  var resta= Number(almacen[0]) - Number(almacen [1]);
        //  respuesta.value = resta;
        //    break;






   // aqui planeaba poner la variable de operaciones para que agregara el simbolo correspondiente ;s
   //almacen.push("+");
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
