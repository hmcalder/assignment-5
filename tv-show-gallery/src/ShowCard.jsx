//responsible for displaying each show card 


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
    return(
        <article>
            <h3>{show.name}</h3>
            <p>{cleanSum}</p>
        </article>
    );
}

export default ShowCard;