
function setup() {
    createCanvas(800, 800);
  }


  
  function draw() {
      let hr = hour();
      let min = minute();
      console.log(min);
      let sec = second();
  
      //86400 seconds in a day
      background(216,201,155); //ecru
    
      let totalSeconds = (60 * 60 * hr) + ( 60 * min) + sec
      //console.log(totalSeconds)
      
      //outer circle
      fill(40,17,43); //darkpurple
      noFill();
      strokeWeight(10);
      stroke(95,47,7);
      ellipse(width/2, height/2, 600, 600);
      
    
      //hour circle
      hourWidth = ((hr+1)/24) * 600; 
      fill(216,151,60); //butterscotch
      strokeWeight(0);
      ellipse(width/2, height/2, hourWidth, hourWidth);
    
      //minute circle
      minWidth = ((min+1)/60) * hourWidth;
      fill(189,99,47); //alloy orange
      strokeWeight(0);
      ellipse(width/2, height/2, minWidth, minWidth);
    
      //seconds circle
      secWidth = ((sec+1)/60) * minWidth;
      fill(31,39,27); //black olive
      strokeWeight(0);
      ellipse(width/2, height/2, secWidth, secWidth);
    

      
      // putting the text at the bottom
      textSize(25);
      strokeWeight(0);
      stroke(40,17,43);
      text("Time is of the essence...", 430, 750);
      text("and we don't have much of it.", 470, 780);
      
      
  }