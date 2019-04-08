function birthdayCakeCandles(ar) {

    let count = 0
    let max = ar[0]

    ar.forEach( x =>{
        if(x > max){
            max = x
            count = 0
        }
        if(x === max){
            count += 1
        }
    });
    
    return count
}