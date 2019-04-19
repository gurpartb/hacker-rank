function utopianTree(n) {

    let cycle = 0;
    let height = 1;

    while(cycle < n){
        
        height = (cycle % 2)? height + 1 : height + height;
        cycle++;
    }

    return height;

}