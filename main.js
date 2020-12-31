
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



background_image = "track.jpg";

RCar_width = 60;
RCar_height = 110;
RCar_image = "blue car.png";
RCar_x = 230;
RCar_y = 480;

GCar_width = 68;
GCar_height = 110;
GCar_image = "image.png";
GCar_x = 480;
GCar_y = 480;





function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    RCar_imgTag = new Image();
    RCar_imgTag.onload = uploadCars;
    RCar_imgTag.src = RCar_image;

    GCar_imgTag = new Image();
    GCar_imgTag.onload = uploadCars;
    GCar_imgTag.src = GCar_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCars(){
    ctx.drawImage(RCar_imgTag, RCar_x, RCar_y, RCar_width, RCar_height);
    ctx.drawImage(GCar_imgTag, GCar_x, GCar_y, GCar_width, GCar_height);
}




window.addEventListener("keydown", my_keyDown);

function my_keyDown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);


    if (key_pressed == '38'){
        RCar_up();
        console.log("up");
    }

    if (key_pressed == '40'){
        RCar_down();
        console.log("down");
    }

    if (key_pressed == '37'){
        RCar_left();
        console.log("left");
    }

    if (key_pressed == '39'){
        RCar_right();
        console.log("right");
    }




    if (key_pressed == '87'){
        GCar_up();
        console.log("W");
    }

    if (key_pressed == '83'){
        GCar_down();
        console.log("S");
    }

    if (key_pressed == '65'){
        GCar_left();
        console.log("A");
    }

    if (key_pressed == '68'){
        GCar_right();
        console.log("D");
    }
}


function RCar_up(){
    if(RCar_y >= 0){
        RCar_y = RCar_y - 10;
        console.log("When up is pressed X =" + RCar_x + "Y = " + RCar_y);
        uploadBackground();
        uploadCars();
        
        winCheck();
          
    }
}

function RCar_down(){
    if(RCar_y <= 480){
        RCar_y = RCar_y + 10;
        console.log("When down is pressed X =" + RCar_x + "Y = " + RCar_y);
        uploadBackground();
        uploadCars();
        winCheck();
          
    }
}

function RCar_left(){
    if(RCar_x >= 5){
        RCar_x = RCar_x - 10;
        console.log("When right is pressed X =" + RCar_x + "Y = " + RCar_y);
        uploadBackground();
        uploadCars();
        winCheck();
          
    }
}

function RCar_right(){
    if(RCar_x <= 730){
        RCar_x = RCar_x + 10;
        console.log("When right is pressed X =" + RCar_x + "Y = " + RCar_y);
        uploadBackground();
        uploadCars();
        winCheck();
          
    }
}

function GCar_up(){
    if(GCar_y >= 0){
        GCar_y = GCar_y - 10;
        console.log("When up is pressed X =" + GCar_x + "Y = " + GCar_y);
        uploadBackground();
        uploadCars();
        
        winCheck();
          
    }
}

function GCar_down(){
    if(GCar_y <= 480){
        GCar_y = GCar_y + 10;
        console.log("When down is pressed X =" + GCar_x + "Y = " + GCar_y);
        uploadBackground();
        uploadCars();
        
        winCheck();
          
    }
}

function GCar_left(){
    if(GCar_x >= 5){
        GCar_x = GCar_x - 10;
        console.log("When right is pressed X =" + GCar_x + "Y = " + GCar_y);
        uploadBackground();
        uploadCars();
        winCheck();
          
    }
}

function GCar_right(){
    if(GCar_x <= 730){
        GCar_x = GCar_x + 10;
        console.log("When right is pressed X =" + GCar_x + "Y = " + GCar_y);
        uploadBackground();
        uploadCars();

        winCheck();

          
    }
}



function winCheck(){
    if(GCar_y <= 10){
        document.getElementById("game_status").innerHTML="blue Wins! (Refresh to Play Again!)";
    }
    if(RCar_y <= 10){
        document.getElementById("game_status").innerHTML="red Wins! (Refresh to Play Again!)";
    }

}
