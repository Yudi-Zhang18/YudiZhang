let timesFont;
let font2;
let textContent = "Although a great deal of research has focused on various aspects of control and their relations to psychopa-thology, new insights and therapeutic potential could be revealed through an examination and perhaps emphasis on fears of losing control. Although elements of control-related beliefs and phenomena have been highlighted in association with obsessive-compulsive disorder and social anxiety disorder, this paper will give a fresh perspective on fears and beliefs about losing control, with implications for understanding and perhaps treating a broad range of psychological problems including panic disorder, posttraumatic stress disorder (PTSD), and others. New research questions and hypotheses are proposed, along with potential implications for expanded research into this domain and for clinical applications within a cognitive-behavioural approach.";

let ypos=0;

let imgs=[]
let input;
let  hy=-0;

let   str=""

let final;

let pic=[]
let page=1;
let zfont;
let   tp;
let letters = [];
let rects = [];
let numLetters = 500;
let text2= "A focus on constructs related to control has a long history in psychology. From early seminal work on locus of control within the context of social learning theory (Rotter, 1954) to research that followed on perceived control (even if they didnt employ the term; Glass, Singer, & Friedman, 1969), the concept has had an influence on a range of domains in psychology and clinical psychology (Shapiro, Schwartz, & Astin, 1996). There is a great deal of psychometric and experimental evidence to substantiate this, but perhaps more importantly, and in the spirit of Jack Rachmans work (see Radomsky, Shafran, & Whittal, 2021; Wilson, Clark, Shafran, & Craske, 2022), control-related constructs have clinical relevance. Jack was, among other things, a keen and careful listener/observer and an insightful scientist-practitioner; it is my hope that this work follows in the spirit of some of his contributions to understanding the phenomenology of psychopathological problems in such a way that it might lead others to listen for similar themes in the clinic and/or to examine them in the laboratory. Im grateful for his thoughts about fears of losing control, which we discussed several times, and its my privilege to dedicate this paper to the memory of Professor Stanley Jack Rachman.Although many themes related to control are of course relevant to psychopathology and its treatment, this paper aims to outline how beliefs and fears about losing control may function, and how they might be especially helpful to study, assess, and perhaps target within cognitive and behavioural therapies. Indeed, anecdotally, individuals struggling with a wide array of psychological problems do report concerns about losing control over a range of cognitive, emotional, physiological, and contextual domains. Since much of Jacks work started with what his patients said, some relevant case examples follow, and include descriptions of people who struggled with panic disorder, obsessive-compulsive disorder (OCD), social anxiety disorder, and posttraumatic stress disorder (PTSD).One illustrative case is that of a 32-year-old software engineer who experienced severe anxiety related to the development and deployment of artificial intelligence systems. He described his episodes of anxiety as moments when he felt he was losing control of the AI algorithms and their potential consequences. During these episodes, he would experience intense heart palpitations, sweating, and an overwhelming sense of dread, fearing that the AI he helped create could make autonomous decisions that he could no longer influence or correct. He likened his sensations to being on the edge of a precipice, where a single misstep could lead to catastrophic outcomes. His catastrophic misinterpretations about losing control over the AI systems and the irreversible impact they could have are consistent with cognitive-behavioural models of anxiety (Beck, 1976). In therapy, he found that understanding and challenging his catastrophic beliefs about AI autonomy and learning strategies to manage his anxiety were crucial to his recovery. By the end of therapy, he remarked that realizing I had more oversight and control over the systems than I initially believed was a turning point.The fear of losing control extends beyond specific disorders and can be considered a transdiagnostic issue affecting a broad spectrum of psychological conditions. For individuals with PTSD, the fear of losing control can be particularly pronounced during flashbacks or episodes of dissociation. These experiences can make sufferers feel disconnected from reality and their own bodies, intensifying the belief that they are losing their grasp on the present moment and their sanity. This fear can exacerbate avoidance behaviors and hypervigilance, as individuals strive to prevent situations that might trigger such episodes. Understanding the fear of losing control within PTSD can help in designing therapeutic interventions that focus on grounding techniques and enhancing the individuals sense of safety and control.Moreover, the pervasive nature of control-related fears highlights the importance of addressing these concerns within cognitive-behavioural therapies (CBT). By targeting the underlying cognitive distortions and maladaptive beliefs about control, CBT can help individuals develop healthier coping mechanisms and a more balanced view of their ability to manage their thoughts and emotions. Techniques such as exposure therapy, cognitive restructuring, and mindfulness-based approaches can be particularly effective in reducing the intensity of these fears and improving overall psychological resilience.In conclusion, the fear of losing control is a significant factor in various psychological disorders, contributing to the distress and impairment experienced by individuals. By delving deeper into this fear and its manifestations across different conditions, researchers and clinicians can gain valuable insights into its role in psychopathology. This understanding can inform the development of more targeted and effective interventions, ultimately helping individuals regain a sense of control and improve their quality of life. Further research in this area is essential to expand our knowledge and refine our therapeutic approaches, ensuring that we address the nuanced and multifaceted nature of control-related fears in mental health."
function preload() {
  timesFont = loadFont('./p1/fonts/times.ttf'); // 加载Times字体文件
  font2 = loadFont('./p1/fonts/3.otf'); // 加载Times字体文件
  zfont = loadFont('./p1/fonts/4.ttf'); // 加载Times字体文件
  tp=loadImage("./p1/images/999.png")
  final=loadImage("./p1/images/qq.png")
  imgs[0]=loadImage("./p1/images/1.png")
  imgs[1]=loadImage("./p1/images/2.png")
  imgs[2]=loadImage("./p1/images/3.png")
  imgs[3]=loadImage("./p1/images/4.png")
  imgs[4]=loadImage("./p1/images/5.png")
  imgs[5]=loadImage("./p1/images/6.png")


  for(let i=0;i<24;i++){
    pic[i]=loadImage("./p1/images/text"+(i+1)+".png")
  }
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode (CENTER)

  for (let i = 0; i < 50; i++) {
    letters.push(new Letter(random(width), random(683,983)));
  }



  for (let i = 0; i < 10; i++) {
    rects.push(new RRect(random((width - 1100) / 2,(width - 1100) / 2+1100), random(683,983),1));
  }

  for (let i = 0; i < 500; i++) {
    letters.push(new Letter(random(width), random(983,1450)));
  }


  for (let i = 0; i < 50; i++) {
    rects.push(new RRect(random((width - 1100) / 2,(width - 1100) / 2+1100), random(983,1450),1));
  }
  for (let i = 0; i < 150; i++) {
    rects.push(new RRect(random(width), random(1650,4450),2));
  }


 
}

function draw() {
  background(255)
if(page==1){
  translate (0,hy)
  textSize(18)
  textFont(timesFont); 
  
  text(textContent, (width - 1100) / 2, 83,1100); // 绘制文字


  push ()

  textSize(18)
  textFont(font2); 
  textAlign(CENTER)
  translate(20,330)
  // stroke(255,0,0)
  fill(255,0,0)
  rotate (PI/2)
  text("The Fear of Losing Control -- Adam S. Radomsky",0,0)
 



  pop()


  push ()


  
 imageMode (CORNER)
 image(imgs[3],width-140,83,imgs[3].width/5,imgs[3].height/5)


  pop()
  push ()

  textSize(12)
  textFont(font2); 
  textAlign(LEFT,CENTER)
  translate(width-320,240)

  rotate (PI/2)
  fill(0,0,0,80)
  // textAlign(CENTER,CENTER)
  text("The fear of losing control is deeply rooted in both psychological and physiological mechanisms that have evolved to ensure human survival.",0,0,300,200)
 



  pop()
  
  
  text(text2, (width - 1100) / 2, 583,1100); // 绘制文字


  for (let i = 0; i < letters.length; i++) {
    letters[i].display();
  }

  textFont(font2); 
  // text("TYpe YoUr ThoughT Here", (width - 1100) / 2, 1483,1100); // 绘制文字
  image(tp, width  / 2-tp.width/2-50, 1483,tp.width/1.5,tp.height/1.5)
 push ()
  fill (243)
  stroke(243)
  rect((width - 1100) / 2, 1523,1100,150,20)

  fill(255,0,0)
  if(str.length>56)rect(width/2-305, 1543,80,22)
    if(str.length>189)rect(width/2-400, 1573,50,22)
      if(str.length>217)rect(width/2-200, 1573,80,22)
        if(str.length>434)rect(width/2+200, 1593,80,22)
          if(str.length>573)rect(width/2+100, 1613,80,22)
  fill (0)
  noStroke()
  textFont(zfont)
  textSize(18)
  // text(str,(width - 1070) / 2, 1563,1080)
  text("I feel like the article starts to be disordered and it’s really hard to read right now. It makes me feel weird and a little bit AFRAID. The words don’t seem to fit together anymore. I’m trying to follow along, but it’s like the meaning is hiding from me, getting lost in the chaos. It’s unsettling, almost like the text is alive, shifting and twisting in ways that don’t make sense. I keep reading, hoping it’ll clear up, but instead, it just pulls me deeper into this strange, uncomfortable feeling. It’s like something’s lurking just beneath the surface, and I’m not sure I want to find out what it is.".slice(0,str.length),(width - 1070) / 2, 1563,1080)
  pop ()
  push ()
  imageMode (CORNER)
  image (imgs[0],(width - 1100) / 2, 233,375*1.5,203*1.5)

  pop ()
}
else{
  translate (0,-200)
  translate (0,hy)

  
  push ()
  imageMode (CORNER)

  if(hy<-1100)image(pic[0],(width - 800) / 2, 1700,pic[0].width/5,pic[0].height/5)
    if(hy<-1250) image(pic[1],(width - 800) / 2, 1800,pic[1].width/5,pic[1].height/5)
      if(hy<-1400)image(pic[2],(width - 1100) / 2, 1900,pic[2].width/5,pic[2].height/5)
        if(hy<-1550)image(pic[3],(width - 1100) / 2, 1950,pic[3].width/5,pic[3].height/5)
  
          if(hy<-1700)image(pic[4],(width - 1100) / 2, 2150,pic[4].width/5,pic[4].height/5)
            if(hy<-1850)image(pic[5],(width - 1100) / 2, 2250,pic[5].width/5,pic[5].height/5)
              if(hy<-2000)image(pic[6],(width - 800) / 2, 2400,pic[6].width/5,pic[6].height/5)
                if(hy<-2150)image(pic[7],50, 2600,pic[7].width/5,pic[7].height/5)
                  if(hy<-2300)image(pic[8],width/2, 2600,pic[8].width/5,pic[8].height/5)
                    if(hy<-2300)image(imgs[4],width-imgs[4].width/5, 2700,imgs[4].width/5,imgs[4].height/5)
                      if(hy<-2300)image(pic[9],(width - 1100) / 2, 2700,pic[9].width/5,pic[9].height/5)
                        if(hy<-2300)image(pic[10],50, 2800,pic[10].width/5,pic[10].height/5)
                          if(hy<-2300)image(pic[11],width/2-100, 2900,pic[11].width/5,pic[11].height/5)
                            if(hy<-2300)image(pic[11],width/2-100, 3150,pic[11].width/5,pic[11].height/5)
                              if(hy<-2300)image(pic[12],width/2-500, 3000,pic[12].width/5,pic[12].height/5)
                                if(hy<-2300)image(pic[13],50, 3300,pic[13].width/6,pic[13].height/6)
                                  if(hy<-3200)image(pic[14],width-pic[14].width/6-100, 3800,pic[14].width/6,pic[14].height/6)
                                    if(hy<-3200) image(pic[15],width/2-500, 4000,pic[15].width/5,pic[15].height/5)
                                      if(hy<-3200)      image(pic[20],width/2-100, 4050,pic[20].width/7,pic[20].height/7)
                                        if(hy<-3200)image(pic[20],width/2-100, 4090,pic[20].width/7,pic[20].height/7)
                                          if(hy<-3200)image(pic[20],width/2-100, 4130,pic[20].width/7,pic[20].height/7)
                                            if(hy<-3200)image(pic[20],width/2-100, 4170,pic[20].width/7,pic[20].height/7)
                                              if(hy<-3200)image(pic[21],width/2, 4220,pic[21].width/7,pic[21].height/7)

                                                if(hy<-3200)image(pic[16],50, 3900,pic[16].width/6,pic[16].height/6)
                                                  if(hy<-3200)image(pic[17],250, 3900,pic[17].width/6,pic[17].height/6)
                                                    if(hy<-3200)image(pic[23],300, 3800,pic[23].width/10,pic[23].height/10)

              
                                                      if(hy<-3200)image(pic[18],width/2+200, 4300,pic[18].width/5,pic[18].height/5)

 

                                                        if(hy<-3200)image(pic[19],100, 1700,pic[19].width/5,pic[19].height/5)
                                                          if(hy<-3200)image(pic[19],100, 2100,pic[19].width/5,pic[19].height/5)
                                                            if(hy<-3200)image(pic[19],200, 2100,pic[19].width/5,pic[19].height/5)


                                                              if(hy<-3200)image(pic[19],width/2, 2000,pic[19].width/5,pic[19].height/5)
                                                                if(hy<-3200)image(pic[19],width/2+100, 2000,pic[19].width/5,pic[19].height/5)
                                                                  if(hy<-3200)image(pic[19],width-pic[19].width/5-100, 2200,pic[19].width/5,pic[19].height/5)




  image(imgs[5],100, 1950)

  pop ()
}

 
  for (let i = 0; i < rects.length; i++) {
    rects[i].display();
  }

  if(hy==-3450){


    zm+=1
  //   push()
 
  //   translate (0,-hy)
  //   translate (0,-width*1.87)
  
    
  
  //   imageMode (CORNER)
  //  background(255)
    
  //   image(final,0,0,width,width*2.77)

  //   pop()


  
    
  }
  else{

    zm=0
  }

  if(zm>60*12){

    background(255)
    if(hy<-3200)      image(pic[20],width/2-100, 4050,pic[20].width/7,pic[20].height/7)
      if(hy<-3200)image(pic[20],width/2-100, 4090,pic[20].width/7,pic[20].height/7)
        if(hy<-3200)image(pic[20],width/2-100, 4130,pic[20].width/7,pic[20].height/7)
          if(hy<-3200)image(pic[20],width/2-100, 4170,pic[20].width/7,pic[20].height/7)
            if(hy<-3200)image(pic[21],width/2, 4220,pic[21].width/7,pic[21].height/7)

             
                  if(hy<-3200)image(pic[23],300, 3800,pic[23].width/10,pic[23].height/10)

  }

}

function  mouseClicked(){

  if(zm>60*12){


    window.location.href = "index2.html";
  }



}


function keyPressed(){
  console.log(key)

  if(key === 'Backspace'){

    str=str.slice(0, -1);
  }
  if(key === 'Enter'){

    page=2
    hy=-1200
  }
  else if((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || (key >= '0' && key <= '9') || key === ' '){

   if(key.length<4) str+=key
  }
 


}



class Letter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.char = String.fromCharCode(65 + int(random(26)));
    this.s=random(12,36)
    this.qs=random(200,600)

    this.k=random(1)

    this.sp=0
  }
  
  display() {
    push ()
    textAlign(CENTER,CENTER)
    translate(this.x, this.y)
    if(this.k<0.3) rotate(this.sp)

    this.sp+=0.06

    fill(0);
    textSize(14)
    if(this.qs<200)text(this.char, 0, 0);
    pop()

    this.qs-=1
  }
}




class RRect {
  constructor(x, y,t) {
    this.x = x;
    this.y = y;
    this.t = t;
    
    this.W=this.t==1?random(12,60):random(60,190)

    this.H=t==1?18:random(18,90)
  }
  
  display() {
    push ()
    fill(0);
   if(this.y-600<-hy&&this.t==1&&page==1) rect(this.x,this.y,this.W,this.H)
   if(this.y-600<-hy&&this.t==2&&page==2) rect(this.x,this.y,this.W,this.H)
    pop()
  }
}
function mouseWheel(event) {
  // 根据鼠标滚动方向调整内容的垂直位置
  ypos = event.delta;

  if(ypos>0&&hy>-1050&&page==1)hy-=150
  if(ypos<0&&hy<=-150&&page==1)hy+=150
  if(ypos>0&&hy>-3450&&page==2)hy-=50
  if(ypos<0&&hy<=-1350&&page==2)hy+=50
  console.log(hy)
  


  // console.log(ypos)
  
  
}





