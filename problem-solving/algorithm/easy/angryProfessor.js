function angryProfessor(k, a) {
    let oneTime = 0;
    a.forEach( x => {
        if(x <= 0){
            oneTime++;
        }
    });

    return (oneTime >= k) ? 'NO' : 'YES';
}