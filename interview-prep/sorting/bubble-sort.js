function countSwaps(arr) {

    let totalSwaps = 0;
    let swaps;

    do{

        swaps = 0;

        for(let i = 1; i < arr.length; i++){

            if( arr[i-1] > arr[i]){

                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i]= temp;

                swaps++;
            }
        }

        totalSwaps += swaps;
        
    }while(swaps)

    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${arr[0]}`);
    console.log(`Last Element: ${arr[ arr.length - 1 ]}`);
}