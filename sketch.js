
let imgs=[]

let   hy=0;
let page=1;
let knm=[]
function preload() {
 
 for(let i=0;i<9;i++){


  imgs[i]=loadImage("./images/"+i+".png")
 }

  
}


function setup() {
  createCanvas(windowWidth, windowWidth*2.35);
  
  
  knm.push(new RRect(imgs[2],166,172,imgs[2].width/2,imgs[2].height/2,true))
  knm.push(new RRect(imgs[2],1242,1385,imgs[2].width/2,imgs[2].height/2,true))
  knm.push(new RRect(imgs[2],1417,1447,imgs[2].width/2,imgs[2].height/2,true))
  knm.push(new RRect(imgs[3],1451 ,598,imgs[3].width/2,imgs[3].height/2,true))
  knm.push(new RRect(imgs[3],1469,2413,imgs[3].width/2,imgs[3].height/2,true))
  knm.push(new RRect(imgs[3],64,2853,imgs[3].width/2,imgs[3].height/2,true))
  knm.push(new RRect(imgs[4],119,550,imgs[4].width/2,imgs[4].height/2,true))
  knm.push(new RRect(imgs[4],1252,2361,imgs[4].width/2,imgs[4].height/2,true))
  knm.push(new RRect(imgs[5],212,741,imgs[5].width/2,imgs[5].height/2,true))
  knm.push(new RRect(imgs[6],583,1013,imgs[6].width/2,imgs[6].height/2,true))
  knm.push(new RRect(imgs[6],194,2046,imgs[6].width/2,imgs[6].height/2,true))
  knm.push(new RRect(imgs[7],163,1676,imgs[7].width/2,imgs[7].height/2,true))
  knm.push(new RRect(imgs[8],488,1729,imgs[8].width/2,imgs[8].height/2,true))

 
}

function draw() {
  background(255)
  
  translate (0,hy)

  if(mouseX>width-400&&mouseX<width&&mouseY>12&&mouseY<323){

    image(imgs[1],10,10,width-10,(width-10)*2.35)
  }
  else{
    image(imgs[0],10,10,width-10,(width-10)*2.35)
  }
 




  knm.forEach((item,index)=>{



     if(index>13)item.display()
    item.update()
  })


}



function mouseClicked(){


  console.log(mouseX,mouseY)

  if(mouseX>width-400&&mouseX<width&&mouseY>12&&mouseY<323){

    window.location.href = "index1.html";
  }
}









class RRect {
  constructor(t,x, y,w,h,k) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.w = w;
    this.h = h;

    this.k=k
    
  
  }
  
  display() {
    push ()
     image(this.t,this.x,this.y,this.w,this.h)
    pop()
  }

  update(){


    if(dist(mouseX,mouseY,this.x,this.y)<150&&frameCount%30==0&&this.k){
        
      knm.push(new RRect(this.t,this.x+random (-80,80),this.y+random (-80,80),this.w,this.h,false))

    }
  }
}



