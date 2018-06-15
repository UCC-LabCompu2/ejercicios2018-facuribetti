let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var dx = 2;
var dy = -2;
var derechaPresionada = false;
var izquierdaPresionada = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    //console.log(e.keyCode);
    if(e.keyCode == 39){
        derechaPresionada = true;
    }
    if(e.keyCode == 37){
        izquierdaPresionada = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39){
        derechaPresionada = false;
    }
    if(e.keyCode == 37){
        izquierdaPresionada = false;
    }
}
let barra = {
    x: (canvas.width / 2) - (80 / 2),
    y: canvas.height - 30,
    ancho: 80,
    alto: 15,
    color: '#0ad',
    velX: 2,
    dibujar: function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.ancho, this.alto);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};
let bolita = {
    x: (canvas.width / 2) - (15 / 2),
    y: canvas.height - 50,
    radio: 15,
    color: '#d0a',
    velX: 3,
    velY: -3,
    dibujar: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};
let bloques = {
    contenido: [],
    columnas: 5,
    filas: 3,
    margenTop: 30,
    margenLeft: 30,
    init: function () {
        for (let f = 0; f < this.filas; f++) {
            for (let c = 0; c < this.columnas; c++) {
                this.contenido.push(
                    {
                        x: this.margenLeft + c * 75,
                        y: this.margenTop + f * 20,
                        existe: true
                    }
                )
            }
        }
    },
    dibujar: function () {
        for (bloque of this.contenido) {
            if(bloque.existe){
                ctx.beginPath();
                ctx.rect(bloque.x, bloque.y, 70, 18);
                ctx.fillStyle = '#259';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
};



function detectarColision(){
    for(b of bloques.contenido){
        if(b.existe){
            if(bolita.x > b.x && bolita.x < b.x+bloques.ancho &&
                bolita.y > b.y && bolita.y < b.y+bloques.alto){
                bolita.velY = -bolita.velY;
                b.existe = false;
            }
        }
    }
}





bloques.init();
bolita.dibujar();
barra.dibujar();
bloques.dibujar();
function  dibujarJuego() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(bolita.y-bolita.radio < 0){ //Rebota Arriba
        bolita.velY = -bolita.velY;
    }
    if(bolita.y+bolita.radio > canvas.height){ //Rebota Abajo
        if(bolita.x > barra.x && bolita.x < barra.x+barra.ancho){
            bolita.velY = -bolita.velY;
        }
        else{
            alert("Game Over!");}
    }
    if(bolita.x+bolita.radio > canvas.width){ // Rebota Derecha
        bolita.velX = -bolita.velX;
    }
    if(bolita.x-bolita.radio <0){ // Rebota Izquierda
        bolita.velX = -bolita.velX;
    }
    if(derechaPresionada && barra.x+barra.ancho < canvas.width){ //Mueve derecha
        barra.x += barra.velX;
    }
    if(izquierdaPresionada && barra.x > 0){ //Mueve Izquierda
        barra.x -= barra.velX;
    }
    detectarColision();
    bolita.dibujar();
    barra.dibujar();
    bloques.dibujar();
    bolita.x += bolita.velX;
    bolita.y += bolita.velY;
}
setInterval(dibujarJuego, 15);