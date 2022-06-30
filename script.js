//'use strict';
 /*console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent='✨Correct number';
document.querySelector('.number').textContent=13; 
document.querySelector('.score').textContent=10;

console.log(document.querySelector('.guess').value=23);
*/
let secretNum=Math.random(); 

secretNum=Math.trunc(secretNum*20 +1);

//const t=Math.random();
//document.querySelector('.number').textContent=secretNum; 
let score=20;
let highScore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    
    console.log(guess);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent='😓 No Number';
    }
    //when guess is correct
    else if(guess === secretNum){

        document.querySelector('.message').textContent='✨Correct Number';
        document.querySelector('.number').textContent = secretNum;
        //console.log("before");
        document.querySelector('body').style.backgroundColor='#60b347';
        //console.log("after");
        document.querySelector('.number').style.width='30rem';

        if(score>highScore)
        {
            highScore=score;
            document.querySelector('.highscore').textContent=highScore
        }
    }
    else if(guess!=secretNum){
        if(score > 1){document.querySelector('.message').textContent=guess>secretNum?'📈 Too High!':'📉 Too low';
        score--;
        document.querySelector('.score').textContent=score;}
        else{document.querySelector('.message').textContent='😥You lost the game';
        document.querySelector('.score').textContent=0;} 
    }
    // //when guess is too high
    // else if(guess > secretNum){
    //     if(score > 1){document.querySelector('.message').textContent='📈 Too High!';
    //     score--;
    //     document.querySelector('.score').textContent=score;}
    //     else{document.querySelector('.message').textContent='😥You lost the game';
    //     document.querySelector('.score').textContent=0;}
        
    // }
    // //when guess is too low
    // else if(guess < secretNum){
    //     if(score>1){document.querySelector('.message').textContent='📉 Too low';
    //     score--;
    //     document.querySelector('.score').textContent=score;}
    //     else{document.querySelector('.message').textContent='😥You lost the game';
    //     document.querySelector('.score').textContent=0;}
    // }
    
});

document.querySelector('.again').addEventListener('click',function(){
    score=20
    
    secretNum=Math.random(); 
    secretNum=Math.trunc(secretNum*20 +1);

    document.querySelector('.message').textContent='Start guessing.....';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
//console.log("hello");
