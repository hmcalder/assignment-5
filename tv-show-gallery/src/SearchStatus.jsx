function SearchStatus({loading, error, resultCount, hasSearched, searchTerm}){
    return (
        <div>
         {loading && <p>Loading API request....</p>}
         {error && <p>{error}</p>}
         {hasSearched && !loading && !error && resultCount === 0 && <p>No TV shows found with that name.</p>}
         {hasSearched && !loading && !error && (<p>Search Results for: {searchTerm} | Number of Results: {resultCount}</p>)}

        </div>
    );
}

export default SearchStatus;