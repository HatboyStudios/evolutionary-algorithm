var fit_chunks;
var pooled_paths;

var checkChunks;
var createPool;
var nextGeneration;
var mutatePaths;
var resetGame;

var chunk_balance;
var pool_balance;
var generation_balance;
var mutation_balance;

function mutateSetup() {
    chunk_balance = 0;
    pool_balance = 0;
    generation_balance = 0;
    mutation_balance = 0;

    checkChunks = false;
    createPool = false;
    nextGeneration = false;
    mutatePaths = false;
    resetGame = false;

    fit_chunks = [];
    pooled_paths = [];
}

function mutateDraw() {
    divideChunks();

    generatePool();

    selectNextGen();

    mutationProcess();

    beginNextGen();
}

function divideChunks() {
    if(checkChunks === true) {
        for(chunk_balance; chunk_balance < 1; chunk_balance++) {
            let breakOff = Math.floor(random(0,steps));
            for(let i = 0; i < fittest_paths.length; i++) {
                let arr1 = fittest_paths[i].slice(0,breakOff);
                let arr2 = fittest_paths[i].slice(breakOff, breakOff + fittest_paths[i].length);

                fit_chunks.push(arr1);
                fit_chunks.push(arr2);
            }
        }

        createPool = true;
    }
}

function generatePool() {
    if(createPool === true) {
        for(pool_balance; pool_balance < 1; pool_balance++) {
            for(let i = 0; i < fit_chunks.length; i++) {
                if(i % 2 === 0) {
                    for(let j = 0; j < fit_chunks.length; j++) {
                        if(j % 2 !== 0) {
                            let arr = [];
                            let arrA = fit_chunks[i];
                            let arrB = fit_chunks[j];
                            arr = arr.concat(arrA, arrB);
                            pooled_paths.push(arr);
                        }else {
                            continue;
                        }
                    }
                }else {
                    continue;
                }
            }
        }

        nextGeneration = true;
    }
}

function selectNextGen() {
    if(nextGeneration === true) {
        for(generation_balance; generation_balance < 1; generation_balance++) {
            next_gen_paths = [];
            let gen_vals = [];
            for(let i = 0; i < player_count; i++) {
                gen_vals.push(Math.floor(random(0,25)));
            }

            for(let i = 0; i < gen_vals.length; i++) {
                next_gen_paths.push(pooled_paths[gen_vals[i]]);
            }
        }

        mutatePaths = true;
    }
}

function mutationProcess() {
    if(mutatePaths === true) {
        for(mutation_balance; mutation_balance < 1; mutation_balance++) {
            for(let i = 0; i < next_gen_paths.length; i++) {
                for(let j = 0; j < steps; j++) {
                    let chaos = Math.floor(random(0,50)+1);
                    if(chaos === 50) {
                        next_gen_paths[i][j] = Math.floor(random(0,4)+1);
                        console.log("A Mutation has occured");
                    }
                }
            }
        }

        resetGame = true;
    }
}

function beginNextGen() {
    if(resetGame === true) {
        clear();
        allSprites.remove();
        setup();
    }
}