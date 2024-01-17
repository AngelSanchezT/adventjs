function countHours(year, holidays) {

    return holidays.reduce((accumulator, holiday) => {
        let holidayDate = new Date(holiday + "/" + year);
        return holidayDate.getDay() > 0 && holidayDate.getDay() < 6 ?
            accumulator + 2 :
            accumulator + 0;

    }, 0);
}

module.exports = countHours;