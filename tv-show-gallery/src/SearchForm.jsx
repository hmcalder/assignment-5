//handles when the user submits the form
function handleSubmit(event, search, onSearch, onError, onClearResults){
    event.preventDefault();
    //if the user enters an empty message 
    if(search.trim() === ''){
        onError("Please enter a TV show.");
        onClearResults([]);
        return;
    }

    //sends the search to app.jsx
    onSearch(search);
}
//makes the form 
function SearchForm({ search, setSearch, onSearch, onError, onClearResults }){

    return(
        <form onSubmit={(event) => handleSubmit(event, search, onSearch, onError, onClearResults )}>

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