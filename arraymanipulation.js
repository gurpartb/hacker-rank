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

var arr = [0]
var arrVal = [0]

function addSegment(b = [2, 5, 3], i = 0){

    while(arr[i]!==undefined && arr[i] < b[0]){
        i++;
    }

    // case 0: new Segment beyond the last tracked value
    if(arr[i]===undefined){
        // let c = [b[0], b[2]];
        // let d = [b[1]+1, 0];
        arr.push(b[0]);
        arrVal.push(b[2])
        arr.push(b[1]+1);
        arrVal.push(0)
        return;
    }

    // case 2: new segment starts before arr[i] and end befor a[i]
    if(b[0] < arr[i]){

        if(b[1]+1 < arr[i]){
            let val = arrVal[i-1];
            // let c = [b[0], b[2]+val];
            // let d = [b[1]+1, val];
            arr.splice(i,0, b[0], b[1]+1);
            arrVal.splice(i,0, b[2]+val, val);
            return;
        }

        // case 3: new segment starts before arr[i] and at arr[i]
        if(b[1] + 1 === arr[i]){
            let val = arrVal[i-1];
            // let c = [b[0], b[2]+val];
            arr.splice(i,0,b[0]);
            arrVal.splice(i,0,b[2]+val);
            return;
        }

        // case 3, 4: new segment starts before arr[i] and ends after arr[i]
        // good place to for while loop and update all values in between
        if(b[1] + 1 > arr[i]){
            let c =b[0];
            let cval = b[2]+arrVal[i-1];

            b[0] = arr[i];
            arr.splice(i, 0, c);
            arrVal.splice(i, 0, cval);
            // optimize by add while loop to update all values in between
            // so a single recursive call is made at very end

            // no need for recursive call block below can handel this case
            // addSegment(b, i+1);
            // return;
            i++;
        }
    }

    // statement is redundant since this is the only case left
    // if(b[0]===arr[i][0]){

    // case 1: new Segment starts at the last tracked value
    if(arr[i+1] === undefined){

        arrVal[i] += b[2]
        // let c = [b[1]+1, 0]
        arr.push(b[1]+1);
        arrVal.push(0)
        return;
    }

    // case 4: new segment starts at arr[i] ends before arr[i+1]
    if(b[1] + 1 < arr[i+1]){

        let val = arrVal[i];
        arrVal[i] += b[2];
        // let c = [b[1]+1, val];
        arr.splice(i+1, 0, b[1]+1);
        arrVal.splice(i+1, 0, val);
        return;
    }


    // case 5: new segment starts at arr[i] ends at arr[i+1]
    if(b[1] + 1 === arr[i+1]){

        arrVal[i] += b[2];
        return;
    }

    // case 5, 4: new segment stats at arr[i] ends after arr[i+1]
    // good place to for while loop and update all values in between
    if(b[1] + 1 > arr[i+1]){

        while(arr[i+1]!==undefined && b[1]+1 > arr[i+1]){

            arrVal[i] += b[2]; // same as case 5:
            i++;
        }

        b[0] = arr[i]; // update b[] and make call to case 4:
        addSegment(b, i);
        return;
    }
    // }

    // case 5,5,1: new segment covers (one or multiple) segments in between
    // and ends after the last tracked index

    // case 3, 5, 1: new segment starts before arr[i], covers (one or multiple)
    // segments in betweena and ends after the last tracked index
}

function arrayManipulation(n, queries){
    queries.forEach(b=>{
        addSegment(b);
    });
    let max = 0;
    arrVal.forEach(a=>{
        if(a>max){
            max = a;
        };
    });
    return max;
}

// console.log(arrayManipulation(0, queries));

// test case 0:
// addSegment([5,10,3])
// console.log(arr)
// console.log(arrVal)
// // test case 1:
// addSegment([11,15,4])
// console.log(arr);
// console.log(arrVal);
// // test case 2:
// addSegment([2,3,1])
// console.log(arr)
// console.log(arrVal)
// // test case 5:
// addSegment([2,3,1])
// console.log(arr);
// console.log(arrVal);
// // test case 4:
// addSegment([5,7,1])
// console.log(arr)
// console.log(arrVal)
// // test case 3:
// addSegment([13,15,1])
// console.log(arr)
// // test case 3, 4:
// addSegment([7,12,1])
// console.log(arr)
// // test case 5, 5, 1:
// addSegment([2,18,1])
// console.log(arr)
// // test case 3, 1:
// // test case 3, 5:
// // test case 3, 5, 1:
// // test 3, 5, 5, 5, 4:
// // test 3, 5, 5, 5, 1:
// // test 5, 5, 5, 4: