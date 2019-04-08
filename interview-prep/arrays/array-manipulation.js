function arrayManipulation(n,queries){

    // Traverse from left to right, use 'val' var to keep track of current value
    // Too get a value at any index 
    // add val in beginSeg as you enter an index
    // and subtract value in endSeg as you leave index
    
    let beginSeg = new Array(n+1).fill(0);
    let endSeg = new Array(n+1).fill(0);

    queries.forEach( (arr) => {

        beginSeg[ arr[0] ] += arr[2];
        endSeg[ arr[1] ] += arr[2];
    });

    let max = beginSeg[0];
    let val = 0;

    for(let i = 1; i < n+1 ; i++){

        val += beginSeg[i];

        if(val > max){
            max = val;
        }

        val -= endSeg[i];
    }

    return max;
}