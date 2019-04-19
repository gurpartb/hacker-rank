function utopianTree(n) {

    let cycle = 0;
    let height = 0;

    while(cycle <= n){
        
        height = (cycle % 2)? height + height : height + 1;
        cycle++;
    }

    return height;

}