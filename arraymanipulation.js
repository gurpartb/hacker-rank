var queries = [[29, 40, 787],
[9, 26, 219],
[21, 31, 214],
[8, 22, 719],
[15, 23, 102],
[11, 24, 83],
[14, 22, 321],
[5, 22, 300],
[11, 30, 832],
[5, 25, 29],
[16, 24, 577],
[3, 10, 905],
[15, 22, 335],
[29, 35, 254],
[9, 20, 20],
[33, 34, 351],
[30, 38, 564],
[11, 31, 969],
[3, 32, 11],
[29, 35, 267],
[4, 24, 531],
[1, 38, 892],
[12, 18, 825],
[25, 32, 99],
[3, 39, 107],
[12, 37, 131],
[3, 26, 640],
[8, 39, 483],
[8, 11, 194],
[12, 37, 502]]

var arrSet = []

function merge(arr, brr){
    let ik = Math.min(arr[0], brr[0]);
    let jk = Math.max(arr[0], brr[0]) - 1 ;
    if(ik<=jk){
        let vk = (arr[0]===ik)? arr[2]: brr[2];
        arrSet.push([ik,jk,vk]);
    }
    let ih = jk + 1;
    let jh = Math.min(arr[1], brr[1]);
    let vh = arr[2] + brr[2];
    arrSet.push([ih, jh, vh]);
    let ip = jh + 1;
    let jp = Math.max(arr[1], brr[1]);
    if(ip<=jp){
        let vp = (arr[1]===jp)? arr[2]: brr[2];
        add([ip, jp, vp]);
    }
}
function add(arr){
    let brr;
    for(let i = 0; i < arrSet.length; i++){
        if(arr[0] <= arrSet[i][0] && arrSet[i][1] <=arr[1]
        || arrSet[i][0] <= arr[0] && arr[1] <= arrSet[i][1]
        || arr[0] <= arrSet[i][1] && arrSet[i][1] <= arr[1]
        || arr[0] <= arrSet[i][0] && arrSet[i][0] <= arr[1]){
            brr = arrSet.splice(i,1);
            brr = brr.pop();
            break;
        }
    }
    if(brr){
        merge(brr, arr);
    }
    else{
        arrSet.push(arr)
    }
}

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    queries.forEach( arr =>{
        add(arr);
    });
    let maxVal = arrSet[0][2];
    arrSet.forEach(arr =>{
        if(arr[2]>maxVal){
            maxVal = arr[2];
        }
    });
    return maxVal;
}

console.log(arrayManipulation(0, queries))
// 8268