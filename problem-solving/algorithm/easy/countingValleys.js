function countingValleys(n, s) {

    let valleyCount = 0;
    let seaLevel = 0;
    let level = seaLevel;
    let stepUp = 'U';

    s.split('').forEach(step =>{
        if(step === stepUp){
            level += 1;
            if(level === seaLevel){
                valleyCount +=1;
            }
        }else{
            level -=1;
        }
    });
    return valleyCount;
}