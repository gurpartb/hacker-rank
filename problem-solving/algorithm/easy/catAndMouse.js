function catAndMouse(x, y, z) {
    let a = 'Cat A';
    let b = 'Cat B';
    let c = 'Mouse C';
    let ac = Math.abs(z-x);
    let bc = Math.abs(y-z);
    if(ac === bc){
        return c;
    }
    if(ac < bc){
        return a;
    }
    return b;
}