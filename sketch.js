function setup() {

    createCanvas(900, 600);
  
    background("#03A9F4");
  
  }
  
  function draw() {
  
    stroke("rgb(144,0,255)");
  
    fill("rgb(0,7,255)");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
  
      rect(mouseX, mouseY, 20, 35);
  
    }
  
  }