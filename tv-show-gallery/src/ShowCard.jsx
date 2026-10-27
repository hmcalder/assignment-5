//responsible for displaying each show card 

import { formatDate } from "./utils";
import { formatUpdated } from "./utils";


//show created with map (individual show)
function ShowCard({show}){

    //to remove the html from the text 
    const temp = document.createElement("div"); //has not been appended to the page

    //temporary variable to store the clean summary 
    let cleanSum = "";

    //checking to see if it has a summary and if it is, removing the html 
    if(show.summary !== null){
        temp.innerHTML = show.summary;

        //extracts text without HTML 
        cleanSum = temp.textContent;
    }

    //checking to see if summary is null
    if(cleanSum === null || cleanSum.trim() === ""){
        cleanSum = "No Summary for this particular show."
    }

    //movie posters 
    let poster;

    //if movie is not null
    if(show.image !== null && show.image !== undefined){
        poster = <img src={show.image?.medium} alt={show.name} />;
    }
    //if movie is null
    else{
        poster = <p>No Image Available</p>

    }

    //format the premiere date
    const premiereDate = formatDate(show.premiered);

    //format the last updated 
    const lastUpdated = formatUpdated(show.updated);




    return(
        <article>
            <h3>{show.name}</h3>
            {poster}
            <p>{cleanSum}</p>
            <p>Premiere Date: {premiereDate}</p>
            <p>Last Updated: {lastUpdated} </p>
        </article>
    );
}

export default ShowCard;