//handles when the user submits the form
function handleSubmit(event, search, onSearch){
    event.preventDefault();

    //sends the search to app.jsx
    onSearch(search);
}
//makes the form 
function SearchForm({ search, setSearch, onSearch }){

    return(
        <form onSubmit={(event) => handleSubmit(event, search, onSearch)}>

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