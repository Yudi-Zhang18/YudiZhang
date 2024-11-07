let vid;
let playing = true;


let imgs=[]

let page=0


let cols, rows;
let videoWidth=0, videoHeight=0;
function preload(){

  imgs[0]=loadImage("1.png")
  imgs[1]=loadImage("2.png")
  imgs[2]=loadImage("3.png")



}
function setup() {
  createCanvas(windowWidth,windowHeight);


  vid = createVideo("1.mov");
  vid.size(width,height);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);

}

function draw() {
  background(220);
  let img = vid.get();
  if(page==0){
    image(img, 0, 0);
    image(imgs[0],0,0,width,height)
  }
  if(page==1){


    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * videoWidth;
        let y = j * videoHeight;
        image(img, x, y, videoWidth, videoHeight);
        image(imgs[1],x, y, videoWidth, videoHeight);
      }
    }



  }
  if(page==2){


    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * videoWidth;
        let y = j * videoHeight;
        image(img, x, y, videoWidth, videoHeight);
        image(imgs[2],x, y, videoWidth, videoHeight);
      }
    }



  }
  
}



// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   videoWidth = windowWidth / cols;
//   videoHeight = windowHeight / rows;
// }
function keyPressed() {

  if (playing) {
    vid.pause();
  }
   else {
     vid.play();
   }
   playing = !playing;

}

function mouseClicked() {
  page+=1

  if(page==3){
    window.location.href ="./p4/index.html"
  }

  cols = page+1; // 列数
  rows = page+1; // 行数
  videoWidth = width / cols;
  videoHeight = height / rows;
  console.log(videoWidth,videoHeight)
}
