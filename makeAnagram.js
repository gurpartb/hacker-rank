Array.prototype.counter = function(){

    let obj = {}; 

    this.forEach( el =>{

        if(obj[el]){

            obj[el]++;
        }
        else {

            obj[el] = 1;
        }
    })

    return obj;
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {

    let arra = a.split('');
    let arrb = b.split('');

    let obja = arra.counter();
    let objb = arrb.counter();

    let diff = 0;

    for(let key in obja){

        if(objb[key]){

            diff += Math.abs(objb[ key ] - obja[ key ]);
            objb[ key ] = 0;
        }
        else {

            diff += obja[ key ];
        }
    }

    diff = Object.values( objb ).reduce( ( a, b ) => a + b, diff );

    return diff;
}