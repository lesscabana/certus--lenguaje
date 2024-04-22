/*mi primer codigo en js
window.alert("bienvenidos a la pagina")*/

var number_1 = 10 ;
var number_2 = 12 ;
var result_ = 0;
/*operaciones aritmeticos y expresiones*/
result = number_1 + number_2;
console.log(result);

result = number_1 - number_2;
console.log(result);

result = number_1 / number_2;
console.log(result);

result = number_1 * number_2;
console.log(result);

document.getElementById("resultado").innerHTML="Resultado es:" + result;
document.write("<h1>Certus Oficial</h1>")
/*String "Mi Nombre"
int num1=1;
float num2=1.1;
char letras='A';
bool condition = true;
*/
var mensaje = "";
text = "Inscripciones abiertas";
document.getElementById("mensaje").innerHTML=text;

var cond1= true;
var cond2 = false;

/*arrays y arreglos*/
var nombres = ["juan", "pedro","maria"];
var edades = [19,22,21];
var datos1 = nombres[0]+""+edades[0];
var datos2 = nombres[1]+""+edades[1];
var datos3 = nombres[2]+""+edades[2];
console.log(datos1);
console.log(datos2);
console.log(datos3);
function sumar (value1,value2){
    var result =value1+value2;
    document.getElementById("function").innerHTML="el resultado de la suma es" +result;
}
function sumar2(value1,value2){
    var result = value1+value2;
    return result1;
   document.getElementById("function").innerHTML="el resultado es:" +sumar2(1,3);
}
sumar(1,2);
var letras1= document.getElementById("my_name").innerText;
var letras2= document.getElementById("my_date").innerText;
var num1=1+letras2;
var num2=1+ parseFloat(letras2);
console.log(letras1);
console.log(num1);
console.log(num2);
