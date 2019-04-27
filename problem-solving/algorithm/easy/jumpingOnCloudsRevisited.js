// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {

    let e = 100;
    let eConsumed = 0;

    let i = 0;
    let n = c.length;

    do{

        // update i to new landing index
        i = (i + k)%n;

        // add one for each jump
        eConsumed++;

        let isThunderousCloud = c[i] === 1;

        // add two for thunderous cloud
        if(isThunderousCloud){
            
            eConsumed += 2;
        }

    }while(i !== 0)

    return e - eConsumed;
}