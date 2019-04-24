function minimumAbsoluteDifference(arr) {

    arr.sort( ( a , b ) => a - b );
    
    let min = arr[1] - arr[0];
    
    for(let i = 1; i < arr.length; i++){
    
        let diff = arr[i] - arr[i-1];
    
        min = Math.min( diff , min );
    }

    return min;
}
    