var canvas= new fabric.Canvas('canvaas');

player_x = 10;
player_y = 10;
player_object = "";
click = 0;
p_img = "";
player_images =["IronMan.png", "Thor.png", "Hulky.png", "Spidey.png"];

block_height = 50;
block_width = 50;
block_object = "";

function player_update(){
    fabric.Image.fromURL(player_images[click], function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        p_img=player_object.set({
            top: player_y,
            left: player_x,
            selectable: false
        });
        canvas.add(player_object);
        p_img.on('mousedown', mouseIsDown);
        });
}

function mouseIsDown(){
    click = click+1;
    if (click >3){
        click=0;
    }
    canvas.remove(p_img);
    player_update();
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(block){
        block_object=block;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
       canvas.add(block_object);
    });
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);

        if (e.shiftKey && keypressed=='77'){
            block_height=block_height-10;
            block_width=block_width-10;
            document.getElementById("height").innerHTML= block_height + "pixels";
            document.getElementById("width").innerHTML= block_width + "pixels";
        }

    if (e.shiftKey && keypressed=='80'){
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("height").innerHTML= block_height + "pixels";
        document.getElementById("width").innerHTML= block_width + "pixels";
    }

    if (keypressed=='87'){
        up();
        console.log("up");
    }

    if (keypressed=='83'){
        down();
        console.log("down");
    }

    if (keypressed=='65'){
        left();
        console.log("left");
    }

    if (keypressed=='68'){
        right();
        console.log("right");
    }

    if (keypressed=='66'&& click==0){
        newImage('ironman_body.png');
    }

    if (keypressed=='66'&& click==1){
        newImage('thor_body.png');
    }

    if (keypressed=='66'&& click==2){
        newImage('hulk_body.png');
    }

    if (keypressed=='66'&& click==3){
        newImage('spiderman_body.png');
    }

    if (keypressed=='70'&& click==0){
        newImage('ironman_face.png');
    }

    if (keypressed=='70'&& click==1){
        newImage('thor_face.png');
    }

    if (keypressed=='70'&& click==2){
        newImage('hulk_face.png');
    }

    if (keypressed=='70'&& click==3){
        newImage('spiderman_face.png');
    }

    if (keypressed=='76'&& click==0){
        newImage('ironman_legs.png');
    }

    if (keypressed=='76'&& click==1){
        newImage('thor_legs.png');
    }

    if (keypressed=='76'&& click==2){
        newImage('hulk_legs.png');
    }

    if (keypressed=='76'&& click==3){
        newImage('spiderman_legs.png');
    }

    if (keypressed=='82'&& click==0){
        newImage('ironman_right_hand.png');
    }

    if (keypressed=='82'&& click==1){
        newImage('thor_right_hand.png');
    }

    if (keypressed=='82'&& click==2){
        newImage('hulk_right_hand.png');
    }

    if (keypressed=='82'&& click==3){
        newImage('spiderman_right_hand.png');
    }

    if (keypressed=='72'&& click==0){
        newImage('ironman_left_hand.png');
    }

    if (keypressed=='72'&& click==1){
        newImage('thor_left_hand.png');
    }

    if (keypressed=='72'&& click==2){
        newImage('hulk_left_hand.png');
    }

    if (keypressed=='72'&& click==3){
        newImage('spiderman_left_hand.png');
    }
}


function up(){
    if (player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<=850){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}