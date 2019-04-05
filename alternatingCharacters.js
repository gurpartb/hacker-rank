function alternatingCharacters(s) {

    let arr = s.split('');
    let prevChr = '';
    let deletions = 0;

    arr.forEach( (chr) => {

            if( prevChr === chr ) {

                deletions++;
            } else {

                prevChr = chr;
            }
        }
    );

    return deletions;
}