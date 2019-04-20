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
    let shares = [s0];

    let l0 = getLikes(shares[0], d);
    let likes = [l0];

    let i = 1;
    while(i < n){

        shares[i] = getShares( likes[i-1], m );
        likes[i] = getLikes( shares[i], d);

        i++;
    }

    let likesSum = likes.reduce( (a,b) => a + b, 0);

    return likesSum;
}