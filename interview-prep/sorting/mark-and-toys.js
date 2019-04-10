function maximumToys(prices, k) {

    prices.sort( (a,b) => a - b);

    let toyIndex = 0;

    while( (k - prices[toyIndex]) >= 0 ){

        k = k - prices[toyIndex];
        toyIndex++;
    }

    return toyIndex;
}