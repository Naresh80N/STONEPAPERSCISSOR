let Stone = document.querySelector("#Stone");
let Paper = document.querySelector("#Paper");
let Scissor = document.querySelector("#Scissor");
let yourTurn;

// No. Of Wins
let Yfn=document.querySelector("#Yn");
let Yn=0;
let Cfn=document.querySelector("#Cn");
let Cn=0;


// Your Turn
Stone.onclick = function () {
    yourTurn = 1;
    playGame(yourTurn);
};
Paper.onclick = function () {
    yourTurn = 2;
    playGame(yourTurn);
};
Scissor.onclick = function () {
    yourTurn = 3;
    playGame(yourTurn);
};

// do {

// } while (yourTurn > 0);
// Play Game
function playGame(yourTurn) {

    let comTurn = Math.floor(Math.random() * 3 + 1);
    let comChoice;
    let yourChoice;

    // Your Choices
    switch (yourTurn) {
        case 1:
            yourChoice = "Stone";
            break;
        case 2:
            yourChoice = "Paper";
            break;
        case 3:
            yourChoice = "Scissor";
            break;
    }

    // Computer Choices
    switch (comTurn) {
        case 1:
            comChoice = "Stone";
            break;
        case 2:
            comChoice = "Paper";
            break;
        case 3:
            comChoice = "Scissor";
            break;
    }

    // Finding WInner

    if (yourTurn === comTurn) {
        console.log("Both have choosen " + yourChoice);
        console.log("Its a draw");
    } else if (
        (yourTurn == 1 && comTurn == 3) ||
        (yourTurn == 2 && comTurn == 1) ||
        (yourTurn == 3 && comTurn == 2)
    ) {
        console.log(`You have choose ${yourChoice} and Computer has choosen ${comChoice}`);
        console.log("You won the game.");
        Yn+=1;
        Yfn.innerHTML=Yn;
    }
    else {
        console.log(`You have choose ${yourChoice} and Computer has choosen ${comChoice}`);
        console.log("Computer won the game.");
        Cn+=1;
        Cfn.innerHTML=Cn;

    }
    // Stone{1} > Scissor{3}
    // Paper{2} > Stone{1}
    // Scissor{3} > Paper{2}

}