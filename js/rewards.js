var score_balance;
var sort_balance;
var fit_balance;

function rewardsSetup() {
    score_balance = 0;
    sort_balance = 0;
    fit_balance = 0;

    scores = [];
    scores.length = player_count;

    ranked = [];
    
    for(let i = 0; i < player_count; i++) {
        scores[i] = 0;
    }

    sortScores = false;
    determineFittest = false;
}

function rewardsDraw() {
    findScores();

    rankScores();

    findFittest();
}

function findScores() {
    if(checkScores === true) {
        for(score_balance; score_balance < 1; score_balance++) {
            for(let i = 0; i < steps; i++) {
                let desired_direction;
                
                if((i+1) % 4 === 0) {
                    desired_direction = 4;
                }else if((i+1) % 3 === 0) {
                    desired_direction = 3;
                }else if((i+1) % 2 === 0) {
                    desired_direction = 2;
                }else if((i+1) % 1 === 0) {
                    desired_direction = 1;
                }

                for(let j = 0; j < player_count; j++) {
                    if(desired_direction === paths[j][i]) {
                        scores[j]++;
                    }
                }
            }
        }

        sortScores = true;
    }
}

function rankScores() {
    if(sortScores === true) {
        for(sort_balance; sort_balance < 1; sort_balance++) {
            ranked = [...scores];
            ranked.sort(function(a, b){return b - a});
        }

        determineFittest = true;
    }
}

function findFittest() {
    if(determineFittest === true) {
        for(fit_balance; fit_balance < 1; fit_balance++) {
            for(let i = 0; i < keepData; i++) {
                for(let j = 0; j < player_count; j++) {
                    if(scores[j] === ranked[i]) {
                        fittest_paths[i] = paths[j];
                        break;
                    }
                }
            }
        }

        if(ranked[0] === max_steps) {
            console.log("it trained to perfection");
            remove();
        }

        checkChunks = true;
    }
}