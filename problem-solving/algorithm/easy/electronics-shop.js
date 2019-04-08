function getMoneySpent(keyboards, drives, b) {
    let moneySpent = -1;
    keyboards.forEach( keyboard =>{
        drives.forEach( drive =>{
            if(keyboard+drive > moneySpent
                && keyboard+drive <= b){
                    moneySpent = keyboard + drive;
            }
        })
    })
    return moneySpent;
}