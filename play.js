let arr = [1, 2,3, 4, 3,23,6,7]
arr[8] = 7
arr[9] = Number.NEGATIVE_INFINITY
console.log(Math.min(...arr))