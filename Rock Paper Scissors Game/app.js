let userCount = 0;
let comCount = 0;
const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");


userRock.addEventListener('click', function(){
    game("r");
});

userPaper.addEventListener('click',function(){
    game("p");
    
});

userScissors.addEventListener('click',function(){
    game("s");
    
});

function compGame()
{
    const arr = ['r' , 'p' , 's'];    
    const compTurn = Math.floor(Math.random() * 3);
    return arr[compTurn];
}

function win()
{
    userCount++;

   

    player_one_score.innerHTML = userCount;
    player_two_score.innerHTML = comCount;

   
  
}

document.getElementById("player_one_score").innerHTML = userCount;

function draw()
{

}

function lose()
{
    comCount++;

   player_two_score.innerHTML = comCount;
   player_one_score.innnerHTML = userCount;

}

function game(choice){
        const compChance = compGame();
        const bothValue = compChance + choice;
     

       console.log("User selected "
       +choice+"and computer selected"+compChance);
       result.innerHTML = "User selected "+choice+" and computer selected "+compChance;
       switch(bothValue){

        case "rs":
        case "sp":
        case "pr":
       win();
        break;

        case "rp":
        case "ps":
        case "sr":
        lose();

        break;
        case "pp":
        case "rr":
        case "ss":
        draw();

        break;

       }



    }
