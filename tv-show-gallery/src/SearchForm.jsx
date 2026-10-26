//handles when the user submits the form
function handleSubmit(event, search, onSearch, onError){
    event.preventDefault();
    //if the user enters an empty message 
    if(search.trim() === ''){
        onError("Please enter a TV show.");
        return;
    }

    //sends the search to app.jsx
    onSearch(search);
}
//makes the form 
function SearchForm({ search, setSearch, onSearch, onError }){

    return(
        <form onSubmit={(event) => handleSubmit(event, search, onSearch, onError)}>

            <input 
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />

            <button type="submit">Search</button>

        </form>
    );
}

//says what to export from this file 
export default SearchForm;