function findDigits(n) {
    
    // convert n to a string
    // split digits in char array
    // parse all elements of array to int
    // mod n by each elements in the array
    // count how many time mod operation results in a zero
    // can we mod by 0?

    let str = n.toString();
    let arr = str.split('').map( x => parseInt(x) );

    let count = 0;

    arr.forEach( el => {
        if( (n % el) === 0){
            count++;
        }
    });

    return count;
}