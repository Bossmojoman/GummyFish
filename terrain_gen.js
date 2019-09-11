function setup() {
    noLoop();
        createCanvas(window.innerWidth-100, window.innerHeight-100);
      //noiseSeed(120000)
    
      background(color(0, 0, 255));
    // noprotect();
    noLoop();
  }
  
  function draw() {
      for (var x = 10; x < width -10; x+=1) {
          for (var y = 10; y < height -10; y+=1) {
              var c = 255 * noise(0.009 * x, 0.009 * y);
            
            if(c>120){
              c = color(210, 180, 140);
              stroke(c);
              strokeWeight(1);
              smooth();
              fill(c);
              //rect(x, y, 3, 3);
              //square(x, y, 2, 20);
              point(x, y)
            }
           
          }		
        }
  }