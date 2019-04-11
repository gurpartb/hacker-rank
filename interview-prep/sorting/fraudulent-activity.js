function smallestValue(countArr, medLo, medHi, min){

    let medVal;
    let count = 0;

    for(let i = 0; i < countArr.length; i++){

        count += countArr[i];

        if(count >= medHi){

            if(!medVal){

                medVal = i + min;
            }

            medVal = medVal + i + min;
            break;
        }
        else if( count >= medLo ){

            if(!medVal){
                medVal = i + min;
            }
        }
    }

    return medVal;
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {

    let notificationCount = 0;

    let min = expenditure[0];
    let max = expenditure[0];   

    // find min and max
    expenditure.forEach( x =>{
        if(min > x){
            min = x;
        }else if(max < x){
            max = x;
        }
    });

    let size = max + 1 - min;
    let countArr = new Array(size).fill(0);

    let dayInitial = 0;
    let dayCurr = dayInitial + d;

    for(let i = 0; i < dayCurr; i++){
        
        countArr[ expenditure[i] - min ]++;
    }

    let medLo = Math.floor( ( d - 1 ) / 2 ) + 1 ;
    let medHi = Math.ceil( ( d -  1 ) / 2 ) + 1 ;

    while( dayCurr < expenditure.length ){

        // find median value
        let smallestNotificationVal = smallestValue(countArr, medLo, medHi, min);

        // increment counter if appopriate
        let intialVal = expenditure[ dayInitial ];
        let currVal = expenditure[ dayCurr ];

        if( currVal >= smallestNotificationVal && currVal != 0 ){

            notificationCount++;
        }

        // remove intial val, insert current val, step forward
        countArr[ intialVal - min ]--;
        countArr[ currVal - min ]++;

        dayInitial++;
        dayCurr++;
    }

    return notificationCount;
}