function circularArrayRotation(a, k, queries) {

    let res = new Array(queries.length)

    for(let i = 0; i < res.length; i++){

        let j =  ( queries[i] - (k %  a.length) + a.length ) % a.length;

        res[i] = a[j];
    }
    return res;
}