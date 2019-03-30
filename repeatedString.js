Array.prototype.count = function(str){
    let c = 0;

    this.forEach(el=>{
        if(el === str){
            c += 1;
        }
    });

    return c;
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    // matching pattern
    let letter = 'a'

    // number of times 'a' occurs in 's
    let as = s.split('').count(letter);

    // number of time s occurs 'quotient' completely in n
    let sn = Math.floor(n/s.length);

    // partial size 'remainder' of s in n
    let r = n % s.length;

    // # of times 'a' ocurrs in s.substring(0,r)
    let ar = s.substring(0,r).split('').count(letter)

    // total occurences of 'a'
    let at = as*sn+ar;

    return at;
}