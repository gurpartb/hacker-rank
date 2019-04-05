function twoStrings(s1, s2) {

    let set1 = new Set(s1.split(''))
    let set2 = new Set(s2.split(''))

    let arr1 = Array.from( set1 );
    let arr2 = Array.from( set2 );

    let isCommonSubstr = arr1.some( el => arr2.includes(el) );

    return isCommonSubstr? 'YES': 'NO';
}