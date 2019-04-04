function matchingStrings(strings, queries) {

    let counter = new Array(queries.length).fill(0);

    strings.forEach( str => {

        queries.forEach( (q, i) => {
            
            if(str === q){
                counter[i]++;
            }
        });
    });

    return counter;
}