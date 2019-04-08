function timeConversion(s) {

    let isPM = s.substring(s.length - 2, s.length) === 'PM'
    let hour = parseInt(s.substring(0, 2))

    hour = hour % 12
    
    if(isPM){
        hour = hour + 12
    }

    let hourStr = hour.toString()
    let hourStrIsNotTwoChars = hourStr.length !== 2

    if(hourStrIsNotTwoChars){
        hourStr = '0'+hourStr
    }

    return hourStr + s.substring(2, s.length - 2)
}
