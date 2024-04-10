function gameSetup() {
    steps = 0;
    checkScores = false;

    player = new Group();
    player.width = 50;
    player.height = 50;
    player.collider = 'n';

    paths = [];
    paths.length = player_count;

    for(let i = 0; i < player_count; i++) {
        new player.Sprite(200,200);

        paths[i] = [];
    }
}

function gameDraw(iteration) {
    if(gen === 1 || steps > next_gen_paths[iteration].length) {
        direction = Math.floor(random(0,4)+1);
    }else {
        direction = next_gen_paths[iteration][steps];
    }
    if(direction === undefined) {
        direction = Math.floor(random(0,4)+1);
    }
    playerMovement(iteration, direction);
}

function playerMovement(iteration, direction) {
    if(direction === 1) {
        player[iteration].y -= 5;
    }else if(direction === 2) {
        player[iteration].x -= 5;
    }else if(direction === 3) {
        player[iteration].y += 5;
    }else if(direction === 4) {
        player[iteration].x += 5;
    }

    paths[iteration].push(direction);
}