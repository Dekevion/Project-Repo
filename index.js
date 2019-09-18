//Step 5: (3 points)
//
// Create a function that will print update the winner label if one player has a higher score than the other. If the have the same score, make the label say "Tied".

let player1Click = document.getElementById('p1');
let player2Click = document.getElementById('p2');
let keepScoreP1 = document.getElementById('zero');
let keepScoreP2 = document.getElementById('otherZero');
let display1 = document.getElementById('div1');
let display2 = document.getElementById('div2');
// let middle = document.getElementById();


// for (i =0; i<array.length; i++){
//
// }
counter=0;

// for (x =0; x<array.length; x++){
//     console.log(array2[x])
//
// }
counter2=0;

player1Click.addEventListener('click',function (e) {
    keepScoreP1.innerText = [counter++];
    // keepScoreP1 = array[counter++];
    console.log(keepScoreP1);

    if (keepScoreP1.innerText > keepScoreP2.innerText){
        console.log('player1 is winning');
        display2.innerText = 'Player1 is winning'
    }
    else if (keepScoreP1.innerText === keepScoreP2.innerText){
        display2.innerText = 'It is tied'
    }

});

// if (keepScoreP1.innerText > keepScoreP2.innerText){
//     console.log('player1 is winning');
//     display1.innerText = 'Player1 is winning';
// } else if (keepScoreP2.innerText > keepScoreP1.innerText){
//     console.log('player 2 is winning');
//     display2.innerText('Player 2 is winning')
// }

player2Click.addEventListener('click',function () {
    keepScoreP2.innerText = [counter2++];
    console.log(keepScoreP2);
    if (keepScoreP2.innerText > keepScoreP1.innerText){
        console.log('player2 is winning');
        display2.innerText = 'Player2 is winning'
    } else if (keepScoreP2.innerText === keepScoreP1.innerText){
        display2.innerText = 'It is tied'
    }
});












// if (keepScoreP1.innerText > keepScoreP2.innerText){
//     console.log('player1 is winning');
//     display1.innerText = 'Player1 is winning';
// } else if (keepScoreP2.innerText > keepScoreP1.innerText){
//     console.log('player 2 is winning');
//     display2.innerText('Player 2 is winning')
// }


