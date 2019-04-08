// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    let counter = {};

    ar.forEach( x => {
        
        counter[x]? counter[x] += 1 : counter[x] = 1;
    });

    let pairs = 0;

    for(const val of Object.values(counter)){
        
        pairs += Math.floor(val/2);
    }

    return pairs;
}