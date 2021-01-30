canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_x=5;
car1_y=10;
car2_x=5;
car2_y=90;
car_height=100;
car_width=90;
background_img="whitepng.png";
car1="download-1.png";
car2="images.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackround;
    background_imgTag.src=background_img;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar;
    car1_imgTag.src=car1; 
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar;
    car2_imgTag.src=car2; 
}

function uploadbackround(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car_width,car_height);
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car_width,car_height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38") {
      up();
       console.log(" up key is pressed"); 
    }

    if(keyPressed == "40") {
        down();
         console.log("down key is pressed"); 
      }

      if(keyPressed == "37") {
        left();
         console.log("left key is pressed"); 
      }

      if(keyPressed == "39") {
        right();
         console.log("right key is pressed"); 
      }

      if( keyPressed == "87") {
        up1();
         console.log("w key is pressed"); 
      }
  
      if( keyPressed == "83") {
          down1();
           console.log("s key is pressed"); 
        }
  
        if(  keyPressed == "65") {
          left1();
           console.log("a key is pressed"); 
        }
  
        if( keyPressed == "68") {
          right1();
           console.log("d key is pressed"); 
        }
}

function up() {
 if(car1_y >=0) {
 car1_y = car1_y - 10;
 uploadbackround();
 uploadcar();
 } 
}


function down() {
    if(car1_y <=600) {
    car1_y = car1_y + 10;
    uploadbackround();
    uploadcar();
    } 
   }


   function left() {
    if(car1_x >=0) {
    car1_x = car1_x - 10;
    uploadbackround();
    uploadcar();
    } 
   }


   function right() {
    if(car1_x <=700) {
    car1_x = car1_x + 10;
    uploadbackround();
    uploadcar();
    } 
   }

   

   function up1() {
    if(car2_y >=0) {
    car2_y = car2_y - 10;
    uploadbackround();
    uploadcar();
    } 
   }
   
   
   function down1() {
       if(car2_y <=600) {
       car2_y = car2_y + 10;
       uploadbackround();
       uploadcar();
       } 
      }
   
   
      function left1() {
       if(car2_x >=0) {
       car2_x = car2_x - 10;
       uploadbackround();
       uploadcar();
       } 
      }
   
   
      function right1() {
       if(car2_x <=700) {
       car2_x = car2_x + 10;
       uploadbackround();
       uploadcar();
       } 
      }
      if(car1_x>700){
        document.getElementById("game_status").innerHTML="Car 1 Wins!";
      }
        else if(car2_x>700){
          document.getElementById("game_status").innerHTML="Car 2 Wins!";

        }
      
