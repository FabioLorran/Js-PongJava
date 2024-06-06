let xBolinha = 300;
let yBolinha = 200;
let diametro = 50;
let raio = diametro/2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let cRaquete = 15;
let alRaquete = 105;

//variaveis do oponente

let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  verificaColisaoRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoOponente();
  incluiPlacar();
  marcaPonto();
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
  rect(x,y, cRaquete, alRaquete)
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + cRaquete && yBolinha - raio < yRaquete + alRaquete && yBolinha + raio > yRaquete ) {
    velocidadeXBolinha *=-1;
  }
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
 function movimentaRaqueteOponente(){
   velocidadeYOponente = yBolinha - yRaqueteOponente - cRaquete /2;
   yRaqueteOponente += velocidadeYOponente;
 }
function verificaColisaoOponente(){
  if (xBolinha > xRaqueteOponente - cRaquete && yBolinha - raio < yRaqueteOponente + alRaquete && yBolinha + raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
  }
}
  function incluiPlacar(){
    fill (220)
    text(meusPontos, 278, 26)
    text(pontosDoOponente,320,26)
  }
function marcaPonto(){
  if(xBolinha > 600) {meusPontos += 1;}
  if(xBolinha < 25) {pontosDoOponente +=1;}
}
