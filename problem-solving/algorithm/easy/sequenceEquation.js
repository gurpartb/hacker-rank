function permutationEquation(p) {
    // find index (i) of x, x = [1, n]
    // find index (j) of (i + 1)
    // set arr[ x - 1] to j + 1

    let arr = [];
    for(let x = 1; x <= p.length; x++){

        let i = p.indexOf(x);

        let j = p.indexOf(i + 1);

        arr[ x - 1 ] = j + 1;
    }   

    return arr;
}