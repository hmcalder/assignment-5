//responsible for how many cards will be displayed 

import ShowCard from "./ShowCard";



function ShowList({shows}){
    return(
        <div>
            {shows.map((show) =>

            <ShowCard key = {show.id} show = {show} />
            
            )}
        </div>
    );
}

export default ShowList;