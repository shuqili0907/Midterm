
let colors = ['#03b6fc','#ff8363','#ffec5e','#8945ff','#eb52b0']
let colorArray2 = ["#554C50", "#635959","#78746F","#8C8B8D","#9A86A4","#967f95","#747794","#4e6a72",];
let colors3=['#f5d742','#f58a42']
let colors4=['#4dff67','#41ab50','#2beaff','#2540f5']
let curr
let colors1
let randomBGcolor 
let circles = []
let cubes =[]
let rects = []
let buildings = []
var mgr
let suns = []
let sunColor = ["#eb52b0",'#f58a42',"#ff8363",'#8945ff','#ff4f19','#ffab19']
let colorShade = ['#4dff67','#41ab50','#2beaff','#2540f5',]
let colorShade2 = ['#f5d742','#f58a42','#e3e3e3','#c7c7c7']

const Y_AXIS = 1
const X_AXIS = 2
let c1 
let c2

// Different Objects
//Rotating circle
class Circle { 
   constructor(){
   this.x = random(50,500) 
   this.y = random(50,600) 
   this.radius = random(30,200)
   this.speed = random(10,30)
   this.color = random(colors)
  } 

  display() { 
    fill(this.color) 
    granulate(25)
    ellipse(this.x, this.y, this.radius)
  }
  

  move() { 

    ellipse(this.x, this.y, this.radius)

    push() 
    translate(this.x, this.y) 

    ellipse(0,0, this.radius) 
    
    curr = int(random(colors.length));
    while(curr == colors1){
      curr = int(random(colors.length))
    }
    fill(colors[curr])
    strokeWeight(1)

    rotate(frameCount / this.speed) 
  
    ellipse(this.radius/4, 0, this.radius/2)
    pop()
  }
  changeColor() { 
    this.color = random(colors)
  }
}

//Rotating Rectangles 
class Rectangle {
  constructor(){ 
  this.x = random(50,500) 
   this.y = random(50,600) 
   this.w = random(30,200)
   this.speed = random(10,30)
   this.color = random(colors)
  }
  
  display(){ 
  fill(this.color) 
  granulate(25)
  rect(this.x, this.y, this.w, this.w)
  }
  
  move(){ 
  rect(this.x, this.y, this.w, this.w)
  push() 
    translate(this.x, this.y) 

    rect(0,0, this.w, this.w)
    
    let coor = [ [0, 0], [this.w / 2, 0], [0, this.w / 2] ];
 

  let q = int(random(coor.length))
  translate(coor[q][0], coor[q][1])
  curr = int(random(colors.length))
  while (curr == colors1) {
    curr = int(random(colors.length))
  }
  fill(colors[curr])
    strokeWeight(1)

  
  rect(0, 0, this.w / 2, this.w / 2);
    pop()
  }
  changeColor() { 
    this.color = random(colors)
  }
}

//Fake 3D Cubes 
class Cube{ 
  constructor(){ 
   this.x = random(50,500) 
   this.y = random(50,600) 
   this.w = random(30,200)
   this.shade = random(colors)
   this.shade2 = random(colors3)
   this.shade3 = random(colors4)
  }
    
    display(){ 
      
      let halfW = this.w/2 
      granulate(25)
      fill(this.shade)
      //front face
      rect(this.x, this.y, this.w, this.w) 
      
      //draw top face 
  
      fill(this.shade2)
      beginShape()
      vertex(this.x, this.y);
      vertex(this.x + halfW, this.y - halfW);
      vertex(this.x + halfW + this.w, this.y - halfW);
      vertex(this.x + this.w, this.y);
      endShape(CLOSE);
      
      fill(this.shade3)
      beginShape();
      vertex(this.x + this.w, this.y);
      vertex(this.x + halfW + this.w, this.y - halfW);
      vertex(this.x + halfW + this.w, this.y - halfW + this.w);
      vertex(this.x + this.w, this.y + this.w);
      endShape(CLOSE);
  
    }
  }

  //building1 
  class Building{
    constructor(){ 
    this.x = random(100,600) 
    this.y = random(420,600) 
    this.w = random(40,100) 
    this.h = random(300,700)
    this.color = random(colors) 
    this.shade = random(colorShade) 
    this.shade2 = random(colorShade2)
    }
  
    display(){ 
        granulate(25)
  
    let halfSize = this.w/2 
    
    //Front face
    fill(this.color)
    rect(this.x, this.y,this.w, this.h)
    
    //draw top face 
      fill(this.shade)
      beginShape()
      vertex(this.x,this.y)
      vertex(this.x + halfSize, this.y -halfSize)
      vertex(this.x + halfSize +this.w, this.y -halfSize)
      vertex(this.x + this.w, this.y)
      endShape(CLOSE)
      
     //draw right face 
      fill(this.shade2) 
      beginShape() 
      vertex(this.x + this.w, this.y)
      vertex(this.x + halfSize+this.w, this.y -halfSize)
      vertex(this.x + halfSize +this.w, this.y -halfSize + this.h)
      vertex(this.x + this.w, this.y + this.h)
      endShape(CLOSE)
      
  }
  }

  //Sun 

class Sun { 
  constructor(){
  this.x = random(50,700) 
  this.y = random(50,400) 
  this.radius = random(200,400)
  this.speed = random(10,30)
  this.color = random(sunColor)
 } 

 display() { 
   fill(this.color) 
   ellipse(this.x, this.y, this.radius)
 }
 
}
  


function setup(){
createCanvas(800,800)


mgr = new SceneManager()
mgr.addScene(Animation1) 
mgr.addScene(Animation2) 
mgr.addScene(Animation3) 
mgr.addScene(Animation4)
mgr.showNextScene()
}


function draw(){ 
  mgr.draw()
}

function Animation1 (){
  this.setup = function(){ 
    noStroke() 
    for(let i = 0; i< colors.length; i++) { 
      let circle = new Circle() 
      circles.push(circle)
    }
    frameRate(2)
    
  }
this.draw = function(){ 
  randomBGcolor = random(colorArray2)
  background(randomBGcolor)
 // background(255)
 granulate(25)
 
 
 
 for(let i = 0; i< circles.length; i++) { 
   circles[i].display() 
   circles[i].move()
 }
}

this.mousePressed = function()
{ 
 console.log("Mouse Pressed")
 //this.sceneManagement.showNextScene()
 circles = [];
  randomBGcolor = random(colorArray2)
  background(randomBGcolor)


  for(let i = 0; i< colors.length; i++) { 
    let circle = new Circle() 
    circles.push(circle)
  }

  for(let i = 0; i< circles.length; i++) { 
    circles[i].display() 
    circles[i].move()
  }
}
}

function Animation2 (){ 
this.setup = function(){ 
  noStroke() 

  for(let j = 0; j< colors.length; j++) { 
    let rectangles = new Rectangle() 
    rects.push(rectangles)
  }
}

this.draw = function() { 
  randomBGcolor = random(colorArray2)
  background(randomBGcolor)
  granulate(30)
  
 for(let a = 0; a< rects.length; a++) { 
   rects[a].display() 
   rects[a].move()
 }

}

this.mousePressed = function()
{ 
 console.log("Mouse Pressed")
 //this.sceneManagement.showNextScene()
 rects = [];
  randomBGcolor = random(colorArray2)
  background(randomBGcolor)


  for(let j = 0; j< colors.length; j++) { 
    let rectangles = new Rectangle() 
    rects.push(rectangles)
  }

  for(let a = 0; a< rects.length; a++) { 
    rects[a].display() 
    rects[a].move()
  }
}



}

function Animation3 (){ 
this.setup = function() { 
  noStroke()
  for(let k = 0; k<colors.length; k++){
     let cube = new Cube()
     cubes.push(cube)
  }
}

this.draw = function(){
  randomBGcolor = random(colorArray2)
  background(randomBGcolor)
  granulate(25)
  for(let m = 0; m < cubes.length; m++) {
    cubes[m].display() 
  }
}

this.mousePressed = function()
{ 
 console.log("Mouse Pressed")
 //this.sceneManagement.showNextScene()
 cubes = [];
  randomBGcolor = random(colorArray2)
  background(randomBGcolor)


  for(let k = 0; k<colors.length; k++){
    let cube = new Cube()
    cubes.push(cube)
 }

 for(let m = 0; m < cubes.length; m++) {
  cubes[m].display() 
}
}


}

function Animation4 (){ 
this.setup = function(){ 
noStroke() 
skies = [color("#03b6fc"), color("#ff8363"), color("#ffec5e"), color("#8945ff"), color("#eb52b0")];
c1 = random(skies); // sky gradient
c2 = random(skies); 


let circle = new Sun() 
suns.push(circle)

for(let l = 0; l<7; l++){
 let building1 = new Building() 
 buildings.push(building1)
}
}
this.draw = function(){ 
  setGradient(0, 0, 800, 800, c1, c2, Y_AXIS);
  granulate(25)
  for(let k = 0; k< suns.length; k++) { 
    suns[k].display() 
  //  suns[k].move()
  }
   

for(let b = 0; b<buildings.length; b++) { 
  buildings[b].display()
}
}


this.mousePressed = function()
{ 
  console.log('mouseIsPressed')
  c1 = random(skies) 
  c2 = random(skies)
  buildings = [];
  suns = [];
  // randomBGcolor = random(colorArray2)
  // background(randomBGcolor)


  let circle = new Sun();
  suns.push(circle);

  for (let i = 0; i < 7; i++) {
    let building1 = new Building();
    buildings.push(building1);
  }
}

}

function setGradient(x,y,w,h,c1,c2,axis) { 
  noFill() 
  push() 
  if (axis === Y_AXIS) {
   // Top to bottom gradient
   for (let i = y; i <= y + h; i++) {
     let inter = map(i, y, y + h, 0, 1);
     let c = lerpColor(c1, c2, inter);
     stroke(c);
     line(x, i, x + w, i);
   }
 } else if (axis === X_AXIS) {
   // Left to right gradient
   for (let i = x; i <= x + w; i++) {
     let inter = map(i, x, x + w, 0, 1);
     let c = lerpColor(c1, c2, inter);
     stroke(c);
     line(i, y, i, y + h);
   }
 
}
 pop()
}


function granulate(amount) { 
  loadPixels();
    const d = pixelDensity();
    const pixelsCount = 4 * (width * d) * (height * d);
    for (let i = 0; i < pixelsCount; i += 4) {
        const grainAmount = random(-amount, amount);
        pixels[i] = pixels[i] + grainAmount;
        pixels[i+1] = pixels[i+1] + grainAmount;
        pixels[i+2] = pixels[i+2] + grainAmount;
    
    }
    updatePixels();
}




function mousePressed() { 
// //count how many times mouse is pressed to change scenes
 mgr.handleEvent("mousePressed")


}

function keyPressed() { 
  switch(key){ 
    case '1': 
    mgr.showScene (Animation1) 
    break; 

    case '2': 
    mgr.showScene (Animation2) 
    break; 

    case '3': 
    mgr.showScene (Animation3) 
    break;

    case'4':
    mgr.showScene (Animation4) 
    break; 
  
  }
  mgr.handleEvent("keyPressed")
}

