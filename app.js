userc = 0;
compc = 0;

function askName() {
    var name = prompt("Whats your name?");

    alert(`Hello ${name}, im The Twenty game.`);
    return name
}

askName();

function randNum() {
    var ran = Math.floor(Math.random() * 10) + 1
    return ran
}

function computer() {

        compc = 0;

    do  {

        var randNum = Math.floor(Math.random() * 10) + 1;
    
        compc = compc + randNum
        console.log(compc);
    
        alert(`Computer new number is ${randNum}. Commputer total is ${compc}.`)
    
        
    
    } while (compc < 16)
    
    console.log("out")

}

computer();


function user() {

        userc = 0;

    do  {



        var randu = randNum();
    
        userc = userc + randu

        console.log(userc)
        
        numUser = prompt(`Your number is ${userc}. Would you like to draw another number?`)

    
    } while ((userc < 20) && (numUser != "no"))

    console.log(userc)
    
}
    
user();

function compareNumbers() {

    if(userc > 20){

        alert(`Since ${userc} is over 20, you lost.`)
        console.log(" end")
    
    }
    
    if((userc > compc) && (userc < 21) && (compc < 21)) {
    
        alert(`Your number was ${userc}. Which was closer to 20 than the computer, which had ${compc}. You won`)
    
    }
    
    else if((compc > userc) && (compc < 21) && (userc <21)) {
    
        alert(`Your number was ${userc}. Which was farther from 20 than the computer, which had ${compc}. You Lost`)
    
    }
    
    else if((compc == userc) && (compc < 21) && (userc <21)) {
    
        alert(`Your number was ${userc}. Which was the same number the computer drew. The game was a draw`)
    
    }
    
}

compareNumbers();

function program() {
    // user()

    var q = prompt("If you want to play again, please press 1.")

    if (q == "1") {
        user()
        computer()
        compareNumbers()
        program()
    }
}

program();
