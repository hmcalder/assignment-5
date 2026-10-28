import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import {formatDate, formatUpdated, stripHTML} from './utils';


function ShowDetail(){
    const {id} = useParams();

    //store the inofrmation for a single show 
    const [show, setShow] = useState(null);

    //checks api request and if it is loading 
    const[loading, setLoading] = useState(true);

    //stores te error messages 
    const [error, setError] = useState(null);

    //stores the cast 
    const [cast, setCast] = useState([]);

    //tracks the loading state of cast 
    const[castLoading, setCastLoading] = useState(true);

    //Stores errors from the cast requirements 
    const [castError, setCastError] = useState(null);

    //runs when id changes 
    useEffect(() => {
        //Creates a controller to cancel the api request
        const controller = new AbortController();

        //reset the states before fetching 
        setLoading(true);
        setError(null);
        setShow(null);

        //url for each show 
        const url = `https://api.tvmaze.com/shows/${id}`;

        //fetch the url
        fetch(url, {signal: controller.signal})
        .then((res) => {

            //check response 
            if(res.status === 404){
                throw new Error("Could not find that Show.");
            }
            else if(res.status === 429){
                throw new Error("Too many requests.");
            }
            else if(!res.ok){
                throw new Error("Could not fetch the show's details.")
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

            if(error.name !== "AbortError"){
                
                //store error message 
                setError(error.message);

                //request done 
                setLoading(false);
            }
        });
        return() => controller.abort();
    }, [id]);



    useEffect(() => {
        //contoller for api cast request 
        const controller = new AbortController();
        //reset cast states 
        setCast([]);
        setCastLoading(true);
        setCastError(null);

        //url for the cast info
        const url =`https://api.tvmaze.com/shows/${id}/cast`

        //fetch the cast api
        fetch(url, { signal: controller.signal})

        .then((res) => {
            if(res.status === 429){
                throw new Error("Too Many Casts. Please try again.");
            }
            else if(!res.ok){
                throw new Error("Could not load cast Information.")
            }

            //return the json as javascript
            return res.json();
        })

        .then((data) => {
            //store 15 cast memebers 
            setCast(data.slice(0,15));

            //request complete
            setCastLoading(false);
        })

        .catch((error) => {
            if(error.name !== "AbortError"){
                setCastError(error.message);
                setCastLoading(false);
            }
        });
        //cancel the cast request when leaving the page 
        return() => controller.abort();
    }, [id]);


    //messages 

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

    //displaying the cast

    let castDisplay;

    if(castLoading){
        castDisplay = <p>Loading Cast........</p>
    }
    else if(castError){
        castDisplay = <p>Cast Infomration Could not Load.</p>
    }
    else if(cast.length > 0){
        castDisplay = (
            <div>
                {cast.map((member) => (
                    <p key={member.person.id}>
                        {member.person.name} as {member.character.name}
                    </p>
                ))}

            </div>
        );
    }
    else{
        castDisplay = <p>No Cast Information Available.</p>
    }

    // shows status
    let status = "Not Available";

    if(show.status){
        status = show.status;
    }

    //network or web channel
    let network = "Not Available";

    if(show.network){
        network = show.network.name;
    }
    else if(show.webChannel){
        network = show.webChannel.name;
    }

    //clean show's summary 
    const cleanSum = stripHTML(show.summary);

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
            <h3>Cast Members:</h3>
            {castDisplay}
            <p>Status: {status}</p>
            <p>Network/Channel: {network}</p>
            <h3>Summary:</h3>
            <p>{cleanSum}</p>
            <Link to="/">Back to Gallery</Link>



        </div>
    );
};

export default ShowDetail;