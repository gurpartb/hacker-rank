function jumpingOnClouds(c){
    let i = 0, j = 0;
    while(i < c.length - 1){
        j += 1;
        i += (c[i+2])? 1: 2;
    }
    return j;
}