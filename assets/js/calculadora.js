function mostrar(valor){
var input = document.getElementById('operaciones');
input.value += valor;
}

function limpiar() {
var borrarOperaciones = document.getElementById('operaciones');
var borrarResultado = document.getElementById('resultado');
 borrarOperaciones.value = "";
 borrarResultado.value ="";
 }

   function almacenar(){
     var numeros =document.getElementById("operaciones").value;
     var respuesta = document.getElementById('resultado');
     var almacen = numeros.split("+");
     var suma= Number(almacen [0]) + Number(almacen [1]);
     respuesta.value = suma;

    //  var operadores =["+","-","*","/"];
    //  longitud = operadores.length;
     //
    //  for(var i=0; i == longitud;i++){
    //     if(longitud[i]== "+"){
    //       var almacen = numeros.split("+");
    //     }
    //     else if (longitud[i]== "-") {
    //       var almacen = numeros.split("-");
     //
    //     }
    //     else if (longitud[i]== "*") {
    //     var almacen = numeros.split("*");
     //
    //     }
    //     else if (longitud[i]== "/") {
    //       var almacen = numeros.split("/");
     //
    //
     }


    //  var almacen = numeros.split("+");
    //  var num1=almacen[0];
    //  var num2=almacen [1];
    //  var suma= Number(num1) + Number(num2);
    //  respuesta.value = suma;


        //  var numeros =document.getElementById("operaciones").value;
        //  var respuesta = document.getElementById('resultado');
        // var almacen = numeros.split("-");
        //  var resta= Number(almacen[0]) - Number(almacen [1]);
        //  respuesta.value = resta;
        //    break;






   // aqui planeaba poner la variable de operaciones para que agregara el simbolo correspondiente ;s
   //almacen.push("+");


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
