//responsible for displaying each show card 

import { formatDate, formatUpdated } from "./utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//show created with map (individual show)
function ShowCard({show}){

    //stores and lets me chnage cast 
    const[cast, setCast] = useState([]);
    const url = `https://api.tvmaze.com/shows/${show.id}/cast`;

    //tracks if cast information is loading 
    const [castLoading, SetCastLoading] = useState(true);

    //stores error if cast fails 
    const [castError, setCastError] = useState(null);

    //fetches the cast 
    useEffect(() => {

        const controller = new AbortController();

        //reset the state for new request 
        setCast([]);
        SetCastLoading(true);
        setCastError(null);

        //fetch the url
        fetch(url, {signal: controller.signal})

        //check if the response worked 
        .then((res) => {
            if(!res.ok){
                throw new Error("Cast url fetch did not work.");
            }

            //convert the JSON into JavaScript
            return res.json()
        })

        .then((data) => {
            //get the first 3 cast members 
            setCast(data.slice(0,3));
            SetCastLoading(false);

        })

        //error handling 
        .catch((error) => {
            if(error.name !== "AbortError"){
                setCastError(error.message);
                setCast([]);
                SetCastLoading(false);
            }
        })

        //changes the request when the card changes 
        return() => controller.abort;

    }, [show.id]);

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

    //formating genres 
    let genres = "Not Available"; //initial 

    if(show.genres && show.genres.length > 0){
        genres = show.genres.join(", ");
    }

    //shows average rating 
    let rating = "Not Available";

    if(show.rating && show.rating.average !== null){
        rating = show.rating.average;
    }

    //cast display
    let castDisplay;

    if(castLoading){
        castDisplay = <p>Loading Cast...</p>
    }
    else if(castError){
        castDisplay = <p>Cast Information could not be loaded onto the page.</p>
    }
    else if(cast.length > 0){
        castDisplay = (
        <ul>
            {cast.map((member) => (
                <li key={member.person.id}>
                    {member.person.name}
                </li>
            ))}
        </ul>
        );
    }
    else{
        castDisplay = <p>No Cast Information Available</p>;
    }



    return(
        <article>
            <h3>
                <Link to={`/shows/${show.id}`}>
                    {show.name}
                </Link>
            </h3>
            {poster}
            <p>{cleanSum}</p>
            <p>Premiere Date: {premiereDate}</p>
            <p>Last Updated: {lastUpdated} </p>
            <p>Genres: {genres} </p>
            <p>Rating out of 10: {rating}</p>
            <p>Main Cast:</p>
            {castDisplay}
            <a href={show.url} target="_blank" rel="noopener noreferrer">
                View On TVmaze
            </a>
        </article>
    );
}

export default ShowCard;