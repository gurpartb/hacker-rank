function pageCount(n, p) {
    let front = Math.floor(p/2);
    let back = (n%2)? Math.floor((n-p)/2): Math.ceil((n-p)/2);
    return Math.min(front, back);
}