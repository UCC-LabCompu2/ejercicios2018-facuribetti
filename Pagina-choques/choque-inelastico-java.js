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
    //document.getElementById("V1F").innerHTML = VFINAL1;
    alert("la velocidad final de los objetos es: " + VF);
//    alert("la velocidad final del objeto 2 es: " + V2F);

}