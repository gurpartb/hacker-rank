function getLikes(shr, d){

    return Math.floor( shr / d );
}

function getShares(likePrev, m){

    return likePrev * m;
}

function viralAdvertising(n) {

    let d = 2;
    let m = 3;

    let s0 = 5;
    let shares = [0, s0];

    let l0 = getLikes( shares[1], d);
    let likes = [0, l0];

    let i = 2;
    while(i <= n){

        shares[i] = getShares( likes[i-1], m );
        likes[i] = getLikes( shares[i], d);

        i++;
    }

    let likesSum = likes.reduce( (a,b) => a + b, 0);

    return likesSum;
}