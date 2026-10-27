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

//fomrat the show's last updated into a date and time actually readable 
export function formatUpdated(timeStamp) {

    //check to see if its null or missing 
    if(timeStamp === null || timeStamp === undefined){
        return "Not Available";
    }

    //if its there 
    const date = new Date(timeStamp * 1000);

    //see if its invalid / not a number 
    if(isNaN(date.getTime())){
        return "Not Available";
    }

    //returns the formated date and time 
    return date.toLocaleString("en-US");
}