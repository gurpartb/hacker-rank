// Complete the repeatedString function below.
function repeatedString(s, n) {
    // number of times 'a' occurs in 's
    let as = 0;
    let letter = 'a'
    s.split('').forEach(el=>{
        if(el === letter){
            as += 1;
        }
    });
    // number of time s occurs completely in n
    let sn = Math.floor(n/s.length);
    // partial size of s in n
    let r = n%s.length;
    // # of times 'a' ocurrs in s.substring(0,r)
    let ar = 0;
    s.substring(0,r).split('').forEach(el=>{
        if(el === letter){
            ar += 1;
        }
    })
    // total occurences of 'a'
    let at = as*sn+ar;
    return at;
}