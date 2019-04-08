function dayOfProgrammer(year) {

    const days_per_month = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day_of_programmer = 256;

    days_per_month[1] = days_in_feb(year);

    let month = 0, day = 0;

    for(let i = 0; i < days_per_month.length; i++){

        day += days_per_month[i]

        if(day > day_of_programmer){
            day = day_of_programmer + days_per_month[i] - day;
            month = i + 1;
            break;
        }
    }

    month = two_digit_string(month);
    day = two_digit_string(day);

    return `${day}.${month}.${year}`;
}