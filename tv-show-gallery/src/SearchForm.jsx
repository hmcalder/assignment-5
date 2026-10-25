//handles when the user submits the form
function handleSubmit(event){
    event.preventDefault();
}
//makes the form 
function SearchForm({ search, setSearch }){

 

    return(
        <form onSubmit={handleSubmit}>

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