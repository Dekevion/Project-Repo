

//Code for show hide game that handles events

let player_clicks = 0;

let player_score = 0;

const delay = 2000;

const max_targets = 5;

function main(){
    let player_clicks = 0;
    let player_score = 0;
    // get random spots on the board
    // let random_spot = getRandomInt(1,50);
    // console.log(random_spot)


    //get 5 random locations and place on the board
    for (let i=1; i<= 5; i++){
        let target_num = getRandomInt(1,50);
        let target_cell_id = `td${target_num}`;
        let imgId = `img${target_num}`;

        // append img in td cell
        $("#" + target_cell_id).append(`<img id= ${imgId} src = bird.png width="100"/>`);
        let target_el = document.getElementById(target_cell_id);
        target_el.addEventListener('click', clickedOn)

    }
    //add click listener for entire table
    document.getElementById('table').addEventListener('click',function (e) {
        player_clicks++;
        if (player_clicks === max_targets){
            alert(`game over your score was ${player_score}`)
        }
    })
}
// call when the user hits a target
function clickedOn(e) {
    let hit = e.target.querySelector('img');
    player_score++;
    alert('you got hit')
}

// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// start the game

main();