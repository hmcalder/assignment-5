//responsible for how many cards will be displayed 

import ShowCard from "./ShowCard";



function ShowList({shows}){
    return(
        <div className="show-gallery">
            {shows.map((show) =>

            <ShowCard key = {show.id} show = {show} />
            
            )}
        </div>
    );
}

export default ShowList;