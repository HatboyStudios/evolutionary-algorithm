var max_steps = 1000;
var player_count = 10;
var frames = 1;

var player;
var steps;
var direction;

var paths;

var scores;
var ranked;

var checkScores;
var sortScores;
var determineFittest;

var keepData = player_count/2;

var fittest_paths;

var gen = 0;

var next_gen_paths = [];

function setup() {
    gen++;
    console.log(gen);
    let screen = createCanvas(400,400);
    screen.position(0,0);

    fittest_paths = [];
    fittest_paths.length = keepData;

    gameSetup();
    rewardsSetup();
    mutateSetup();
}

function draw() {
    background("black");

    if(steps < max_steps) {
        if(frameCount % frames === 0) {
            for(let i = 0; i < player_count; i++) {
                gameDraw(i);
            }

            steps += 1;
        }
    }else {
        checkScores = true;

        rewardsDraw();
        mutateDraw();
    }
}