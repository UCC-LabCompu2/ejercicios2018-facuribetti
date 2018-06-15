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

    //var V1F = (((parseFloat(M1) - parseFloat(M2))/(parseFloat(M1) + parseFloat(M2))) * parseFloat(V1)) + (((parseFloat(M2) + parseFloat(M2)) / (parseFloat(M1) + parseFloat(M2))) * parseFloat(V2));
    var VF = ((parseFloat(M1) * parseFloat(V1)) + (parseFloat(M2) * parseFloat(V2))) / (parseFloat(M1) + parseFloat(M2) );

    alert("la velocidad final de los objetos es: " + VF);


}

/*las utilizo de tipo global asi declaro sus valores una sola vez y asi la funcion dibujar no me los modifica */
var x1 = 50;
var x2 = 480 - 50;

function dibujar() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();

    //variables de velocidad ingresadas por el usuario en los sliders
    var V1 = document.getElementById('velocidad1').value;
    var V2 = document.getElementById('velocidad2').value;

    var vx1 = V1/100;             //velocidad relativa de la pelota 1 dependiente de la velocidad del objeto 1
    var vx2 = V2/100;             //velocidad relativa de la pelota 2 dependiente de la velocidad del objeto 2

    //para dibujar ambas pelotas
    var y  = 160; // y coordinate
    var radius = 20; // Arc radius
    var startAngle = 0;
    var endAngle = Math.PI + (Math.PI * 3) / 2;
    var anticlockwise = 4 % 2 !== 0;
    ctx.arc(x1, y, radius, startAngle, endAngle, anticlockwise);
    ctx.arc(x2, y, radius, startAngle, endAngle, anticlockwise);
    ctx.fillStyle = 'dodgerblue';
    ctx.fill();


    //calculos para el movimiento de los objetos



    //funcion para detectar la colision entre ambos objetos

    if(x1>x2){
        vx1 = -vx1;
        vx2 = -vx2;
        x1 = x1-1;
        x2 = x2+1;
//        x1 = x1 - vx1;
//        x2 = x2 + vx2;
    }
    else{
        x1 = x1 + vx1;
        x2 = x2 + vx2;
    }

}
setInterval(dibujar, 15);