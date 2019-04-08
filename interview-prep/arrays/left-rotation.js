function rotLeft(a, d) {
    let arr = Array(a.length);
    a.forEach((el,i)=>{
        let j = (i + a.length - d ) % a.length;
        arr[j] = el;
    });
    return arr;
}