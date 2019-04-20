function beautifulDays(i, j, k) {

    let n = i;
    let days = 0;
    
    while(n<=j){

        let rev = parseInt(n.toString().split('').reverse().join(''));

        if( !( (n - rev) % k ) ){

            days++;
        }

        n++;
    }

    return days;
}