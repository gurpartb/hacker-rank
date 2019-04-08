function hourglassSumHelper(arr, i, j){
    let sum = arr[i][j];
    i -= 1;
    sum  += arr[i][j-1] + arr[i][j] + arr[i][j+1]
    i += 2;
    sum += arr[i][j-1] + arr[i][j] + arr[i][j+1]
    return sum;
}

function hourglassSum(arr) {
    let maxSum = hourglassSumHelper(arr, 1, 1);
    for(let i = 1; i < arr.length - 1; i++){
        for(let j = 1; j < arr[i].length - 1; j++){
            let sum = hourglassSumHelper(arr, i, j);
            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }
    return maxSum;
}