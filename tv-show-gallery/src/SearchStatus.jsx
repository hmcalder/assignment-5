function SearchStatus({loading, error, resultCount, hasSearched}){
    return (
        <div>
         {loading && <p>Loading API request....</p>} 
         {error && <p>{error}</p>}  
         {hasSearched && !loading && !error && resultCount === 0 && <p>No TV shows found with that name.</p>}

        </div>
    );
}

export default SearchStatus;