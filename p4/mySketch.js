/**I used Kyle McDonald's Face Tracking found here: https://kylemcdonald.github.io/cv-examples/ 
And also followed Dan Shiffman's video on Brightness Mirror found here: https://www.youtube.com/watch?v=rNqaw8LT2ZU
All other customization is my own. The colors changes are based on different levels of brightness and 
only certain positions of the face tracker are used to create outlines.**/

var capture;
var tracker
var w = 640,
h = 480;

var video;
var pScale = 10;
var cols =640;
var rows = 480;
let z1=["P",'l',"a","s","e","?","/",":",";",",",">","<"]
// let z2=["?","/",":",";",",",">","<"]
let pict=[]

let cam;

let pli=[]
let pliz=[]

function preload(){


  for(let i=0;i<5;i++){
    pli[i]=loadImage(i+".png")
  }
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  // pixelDensity(1);
  cam = createCapture(VIDEO);
  cam.size(640,480);
  cam.hide();
    for(let i=0;i<width;i++){
    pict[i]=[]
    for(let j=0;j<height;j++){
      pict[i][j]=new Particle (i*5,j*5*1.54);
    }
  }

}



function mouseClicked(){


  // console.log(mouseX,mouseY)

  // if(dist(mouseX,mouseY,1340,152)<100){

    window.location.href = "../index2.html";
  // }
}

function draw() {
  background(0);

  cam.loadPixels();
    
    let pixelSize = 5;
   for(let x=0; x < cam.width; x+=pixelSize){
  for(let y=0; y<cam.height; y+=pixelSize){  
  let index = (x+y*cam.width)*4; // convert x&y to index //index = position in the array
    
    // get the color of the pixel position
    // draw a rect at the corresponding x and y pixel
    let r = cam.pixels[index];
    let g = cam.pixels[index+1];
    let b = cam.pixels[index+2];
    let col = color(r,g,b);
    let bright = brightness(col); 
    // bright is a value between 0 and 255
    if(bright < 60){
       fill(150,0,0);
       }
       else if(bright>=60&&bright <70){
        fill(90);
        //90grey
        }
        else if(bright>=70&&bright <80){
          fill(170);
          //170grey
          }
    else{
     //colorMode(HSB);
       // fill(random(100,200),255,255);
      fill(220);
    }
    noStroke();
    
    let sX = width-x * width / cam.width;
		let sY = y * height / cam.height;

    pict[Math.floor(sX/5)][Math.floor(sY/5)].draw()
  }
  }


  pliz.forEach(item=>{
    item.draw()
  })

  if(frameCount%10==0){
    pliz.push(new Particle2(random(100,width-100),random(100,height-100)))

  }
}

class Particle {
  constructor (p1,p2) {
  this.pos = createVector(p1,p2);
  this.size = 10;
  this.color = color (255);
  this.opacity = 255;

  this.st=random(z1)

  }
  draw() {

  textSize(8)
  text (this.st,this.pos.x, this.pos.y)
 
  }

  }





  class Particle2 {
    constructor (p1,p2) {
    this.pos = createVector(p1,p2);
    
  
    this.st=random(pli)
  
    }
    draw() {
  
  
    image (this.st,this.pos.x, this.pos.y,this.st.width/6,this.st.height/6)
   
    }
  
    }
