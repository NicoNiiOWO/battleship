let x11, y11, x21, x22, y21, y22, x31, y31, x32, y32, x33, y33;
let shipX;
let shipY;
function setup(){
    createCanvas(Math.floor(windowHeight), Math.floor(windowHeight));
    w = Math.floor(windowHeight/10);
    let x = 0;
    let y = 0;
    for(let i = 1; i <= 100; i++){
        fill("lightblue");
        rect(x,y,w,w);
        if(i%10 == 0){
            y += w;
            x = 0;
        }else{
            x += w;
        }
    }
    function rand(){
        return Math.floor(Math.random()*10)*w;
    }

    x11 = rand(), y11 = rand();

    x21 = rand();
    y21 = rand();

    while(x21 == x11 && y21 == y11){
        x21 = rand();
        y21 = rand();
    }

let d = Math.floor(Math.random()*4);
if(d == 0){
        x22 = x21;
        y22 = y21 - w;
        // up
    }else if(d == 1){
        x22 = x21;
        y22 = y21 + w;
        // down
    }else if(d == 2){
        x22 = x21 - w;
        y22 = y21;
        // left
    }else if(d == 3){
        x22 = x21 + w;
        y22 = y21;
        // right
    }

while(x22 == x11 && y22 == y11 || x22 < 0 || x22 >= w*10  || y22 < 0 || y22 >= w*10 ){
    let d = Math.floor(Math.random()*4);
    if(d == 0){
        x22 = x21;
        y22 = y21 - w;
        // up
    }else if(d == 1){
        x22 = x21;
        y22 = y21 + w;
        // down
    }else if(d == 2){
        x22 = x21 - w;
        y22 = y21;
        // left
    }else if(d == 3){
        x22 = x21 + w;
        y22 = y21;
        // right
    }
}

x31 = rand();
y31 = rand();

while(x31 == x11 && y31 == y11 || x31 == x21 && y31 == y21 || x31 == x22 && y31 == y22 || x31 < 0 || x31 >= w*10 || y31 < 0 || y31 >= w*10){
    x31 = rand();
    y31 = rand();
}

d = Math.floor(Math.random()*4);
if(d == 0){
        x32 = x31;
        y32 = y31 - w;
        // up
    }else if(d == 1){
        x32 = x31;
        y32 = y31 + w;
        // down
    }else if(d == 2){
        x32 = x31 - w;
        y32 = y31;
        // left
    }else if(d == 3){
        x32 = x31 + w;
        y32 = y31;
        // right
    }

while(x32 == x11 && y32 == y11 || x32 == x21 && y32 == y21 || x32 == x22 && y32 == y22 || x32 < 0 || x32 >= w*10 || y32 < 0 || y32 >= w*10 ){
    d = Math.floor(Math.random()*4);
    if(d == 0){
        x32 = x31;
        y32 = y31 - w;
        // up
    }else if(d == 1){
        x32 = x31;
        y32 = y31 + w;
        // down
    }else if(d == 2){
        x32 = x31 - w;
        y32 = y31;
        // left
    }else if(d == 3){
        x32 = x31 + w;
        y32 = y31;
        // right
    }
}
if(d == 0){
    x33 = x32;
    y33 = y32 - w;
    // up
}else if(d == 1){
    x33 = x32;
    y33 = y32 + w;
    // down
}else if(d == 2){
    x33 = x32 - w;
    y33 = y32;
    // left
}else if(d == 3){
    x33 = x32 + w;
    y33 = y32;
    // right
}
while(x33 == x11 && y33 == y11 || x33 == x21 && y33 == y21 || x33 == x22 && y33 == y22 || x33 < 0 || x33 >= w*10 || y33 < 0 || y33 >= w*10 ){
    if(d == 0){
        y33 = y32 + w*3;
    }else if(d == 1){
        y33 = y32 - w*3;
    }else if(d == 2){
        x33 = x32 - w*3;
    }else if(d == 3){
        x33 = x32 + w*3;
    }
}

    //fill("green");
    rect(x11, y11, w, w);

    rect(x21, y21, w, w);
    rect(x22, y22, w, w);

    rect(x31, y31, w, w);
    rect(x32, y32, w, w);
    rect(x33, y33, w, w);


    shipX = [x11, x21, x22, x31, x32, x33];
    shipY = [y11, y21, y22, y31, y32, y33];

}



function mouseClicked(){
    let check = 0;
    for(i = 0; i < shipX.length; i++){
        if(mouseX >  shipX[i] && mouseX < shipX[i] + w && mouseY > shipY[i] && mouseY < shipY[i] + w){
            fill("red");
            rect(shipX[i], shipY[i], w, w);
        }else{
            check += 1;
        }
    }
    if(check == shipX.length){
        let x = 0;
        let y = 0;
        for(b = 1; b <= 100; b++){
            if(mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+w ){
                fill("blue");
                rect(x,y,w,w);
            }else{
                if(b%10 == 0){
                    y += w;
                    x = 0;
                 }else{
                    x += w;
                }
            }
        }
    }
}
