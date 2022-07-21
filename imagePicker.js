let check1=0;
let check2=0;
function imagePicker1(){
    var num1=Math.round(Math.random()*5)+1;
    check1=num1;
    let img1='./images/dice'+num1+'.png';
    
        return document.querySelector(".img1").setAttribute("src",img1);
        
}

function imagePicker2(){
    var num2=Math.round(Math.random()*5)+1;
    let img2='./images/dice'+num2+'.png';
    check2=num2;
    return document.querySelector(".img2").setAttribute("src",img2);
    
}

function winner(){
    if(check1>check2){
        document.getElementsByTagName("button")[0].innerHTML="Player 1 Wins!!"+"<br>"+"Click again to play";
    }
    if(check1==check2){
        document.getElementsByTagName("button")[0].innerHTML="Draw!!"+"<br>"+"Click again to play";
    }
    if(check1<check2){
        document.getElementsByTagName("button")[0].innerHTML="Player 2 Wins!!"+"<br>"+"Click again to play";
    }
}
