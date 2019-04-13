function pickingNumbers(a) {

    let obj = {};

    a.forEach( x => {

        if(!obj[x]){

            obj[x] = 0;
        }

        obj[x]++;

        let prev = x - 1;

        if(prev >= 0){

            if(!obj[prev]){

                obj[prev] = 0;
            }

            obj[prev]++;
        }

    });

    let max = 0;
    Object.values(obj).forEach( x => {

        if( x > max){
            
            max = x;
        }
    });

    return max;
}