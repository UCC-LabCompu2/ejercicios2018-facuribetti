function dibujo() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-30;
    ctx.fillStyle = "#000";
    ctx.beginPath();
    var img = new Image();
    img.src = 'imagenes/mario-kart.png';
    ctx.drawImage(img,10,10);
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.moveTo(0,0);
    ctx.fill();
    ctx.closePath()
}


/*
//funciones para dibujar por mi

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var y = canvas.height/2;
var x1 = 0//debo posicionarlo a l izq del canvas aproximadamente a la mitad de altura
var x2 = canvas.width;;//debo posicionarlo a la der del canvas aproximadamente a la mitad de altura
var dx1 = ;         //le debo asignar una proporcion a la velocidad del objeto 1
var dx2 = ;         //le debo asignar una proporcion a la velocidad del objeto 2

function dibujo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   //limpia el canvas
    dibujar();                  //llama a dibujar
    //los valores de dx1 y dx2 pueden ser negativos de acorde a su velocidad, por eso sumo(+,-)
    x1 += dx1;                    //se mueve ...px a la der
    x2 += dx2;                    //se mueve ...px a la der
}

setInterval(dibujo, 10);

function dibujar(){
    ctx.beginPath();
    ctx.arc(x1, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.arc(x2, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#dd0c00";
    ctx.fill();
    ctx.closePath()

}
setInterval(dibujar, 10);           //refresca cada 10 milisegundos
*/

//de aca para abajo anda bien

addEventListener('load',inicio,false); //para ver el valor de los input range
function inicio()
{
    //nombre en html
    document.getElementById('velocidad1').addEventListener('change',cambios,false);
    document.getElementById('masa1').addEventListener('change',cambios,false);
    document.getElementById('velocidad2').addEventListener('change',cambios,false);
    document.getElementById('masa2').addEventListener('change',cambios,false);
//    document.getElementById('V1F').addEventListener('change',cambios,false);


}

function cambios() {
    //nombre en java                            //nombre en html
    document.getElementById('V1').innerHTML = document.getElementById('velocidad1').value;
    document.getElementById('M1').innerHTML = document.getElementById('masa1').value;
    document.getElementById('V2').innerHTML = document.getElementById('velocidad2').value;
    document.getElementById('M2').innerHTML = document.getElementById('masa2').value;
//    document.getElementById('VFINAL1').innerHTML = document.getElementById('V1F').value;
}

function VF() {

    //PARA LOS CALCULOS UTILIZO M/S Y KILOGRAMOS, QUE ME DA EL RESULTADO EN M/S

    var V1 = document.getElementById('velocidad1').value;
    var M1 = document.getElementById('masa1').value;
    var V2 = document.getElementById('velocidad2').value;
    var M2 = document.getElementById('masa2').value;
    //var V1F = (( (M1-M2) / (M1+M2) )*V1) + (( (2*M2) / (M1+M2) )*V2);

    var V1F = (((parseFloat(M1) - parseFloat(M2))/(parseFloat(M1) + parseFloat(M2))) * parseFloat(V1)) + (((parseFloat(M2) + parseFloat(M2)) / (parseFloat(M1) + parseFloat(M2))) * parseFloat(V2));
    var V2F = (((parseFloat(M2) - parseFloat(M1))/(parseFloat(M1) + parseFloat(M2))) * parseFloat(V2)) + (((parseFloat(M1) + parseFloat(M1)) / (parseFloat(M1) + parseFloat(M2))) * parseFloat(V1));

    //document.getElementById("V1F").innerHTML = VFINAL1;
    alert("la velocidad final del objeto 1 es: " + V1F + " Y la velocidad final del objeto 2 es: " + V2F);
//    alert("la velocidad final del objeto 2 es: " + V2F);

}
