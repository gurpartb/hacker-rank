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

function checkMagazine(magazine, note) {

    let magCount = magazine.counter();
    let noteCount = note.counter();

    let isSubSet = Object.keys( noteCount ).every( el => noteCount[el] <= magCount[el] );

    console.log(isSubSet? 'Yes':'No');
}