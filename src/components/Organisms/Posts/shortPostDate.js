export const shortDate = (fulldate)=>{
    console.log(fulldate)
        const startDate = fulldate;
        const convertedStartDate = new Date(startDate);
        const month = convertedStartDate.getMonth() + 1
        const day = convertedStartDate.getDay();
        const year = convertedStartDate.getFullYear();
        const shortStartDate = day + "/" + month + "/" + year;
    return shortStartDate
}