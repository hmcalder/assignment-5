//fixes how the date looks

export function formatDate(dateString){
    if(!dateString){
        return "Not available";
    }

    const date = new Date(dateString); //using the pre defined function 

    if(isNaN(date.getTime())){
        return "Not Available";
    } 

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    });
}