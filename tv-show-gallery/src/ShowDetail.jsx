import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {formatDate, formatUpdated} from './utils';

function ShowDetail(){
    const {id} = useParams();

    //store the inofrmation for a single show 
    const [show, setShow] = useState(null);

    //checks api request and if it is loading 
    const[loading, setLoading] = useState(true);

    //stores te error messages 
    const [error, setError] = useState(null);

    //runs when id changes 
    useEffect(() => {
        //reset the states before fetching 
        setLoading(true);
        setError(null);
        setShow(null);

        //url for each show 
        const url = `https://api.tvmaze.com/shows/${id}`;

        //fetch the url
        fetch(url)
        .then((res) => {

            //check response 
            if(!res.ok){
                throw new Error("Could not fetch the shows details.");
            }

            //convert json to javascript
            return res.json();
        })
        .then((data) => {

            //store info
            setShow(data);

            //request completed
            setLoading(false);
        })
        .catch((error) => {

            //store error message 
            setError(error.message);

            //request done 
            setLoading(false);
        });
    }, [id]);

    if(loading){
        return <p>Loading Show Details.....</p>;
    }
    if(error){
        return <p>{error}</p>;
    }
    if(!show){
        return <p>Show Not Found.</p>
    }

    //genres
    let genres = "Not available";
    if(show.genres && show.genres.length > 0){
        genres = show.genres.join(", ");
    }

    //rating
    let rating = "Not Available";

    if(show.rating && show.rating.average !== null && show.rating.average !== undefined){
        rating = show.rating.average;
    }

    return (
        <div>
            <h2>{show.name}</h2>
            {show.image ? (
                <img src={show.image.original || show.image.medium} alt={show.name}/>
            ): (
            <p>No Image Available</p>
            )}
            <p>Premiere Date: {formatDate(show.premiered)}</p>

            <p>Last Updated: {formatUpdated(show.updated)}</p>

            <p>Genres: {genres}</p>

            <p>Rating out of 10: {rating}</p>
            <p>Show ID: {id}</p>



        </div>
    );
};

export default ShowDetail;