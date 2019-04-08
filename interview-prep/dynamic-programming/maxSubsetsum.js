function maxSubsetSum(arr) {

    var maxarr = [];
    maxarr.length = arr.length + 2;

    maxarr[arr.length] = Number.NEGATIVE_INFINITY;
    maxarr[arr.length + 1] = Number.NEGATIVE_INFINITY;

    maxarr[arr.length - 1] = arr[arr.length - 1];
    maxarr[arr.length - 2] = arr[arr.length - 2];

    for(let i = arr.length - 3; i >= 0; i--){

        maxarr[i] = Math.max(arr[i], arr[i] + maxarr[i + 2],
        arr[i] + maxarr[i + 3], maxarr[i + 2], maxarr[i + 3]);
    }
    
    return Math.max(maxarr[0], maxarr[1]);
}