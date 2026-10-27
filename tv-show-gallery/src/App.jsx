import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import SearchStatus from './SearchStatus';
import ShowList from './ShowList';
import {Routes, Route } from 'react-router-dom'
import ShowDetail from './ShowDetail';

function App() {

  //states:


  //so we an change a variable
  const [search, setSearch] = useState('');
  //the array that holds the fetched shows 
  const [shows, setShows] = useState([]);
  //stores the TV shows from TVmaz
  const[submittedSearch, setSubmittedSearch] = useState('Blue Bloods');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  //Runs when the search is actually submitted(keeps it from submitting every letter)
  useEffect(() => {

    //reset error
    setError(null);
    //a new request is loading (waiting for results of the api call)
    setLoading(true);

    //reset whether a search has completed
    setHasSearched(false);

    //the url
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(submittedSearch)}`;


    //actually fetch the url and wait for the promise 
    //res = the response 
    fetch(url)
      .then((res) => {
        
        //fail response 
        if(!res.ok){
          throw new Error("Request Failed");
        }

        //turns json into JavaScript
        return res.json(); 

      })

      .then((data) => {
        //store the 10 results
        const showResults = data.slice(0,10).map((item) => item.show);

        //update with the api results 
        setShows(showResults);

        //api request finished correctly 
        setLoading(false);

        //make the search come back as done and loaded
        setHasSearched(true);

      })
      .catch((error) => {

        //store error message 
        setError(error.message);

        //finish the api request 
        setLoading(false);
      });

  }, [submittedSearch]);

  return (
  <Routes>


    <Route path="/" element={
    <>
    <div>
      <h1> TV Show Gallery</h1>
      <p> Search for your favorite tv shows!</p>
    </div>

    <SearchForm 
      search = {search}
      setSearch = {setSearch}
      onSearch = {setSubmittedSearch}
      onError = {setError}
      onClearResults = {setShows}
      /> 

    <SearchStatus 
      loading = {loading} 
      error = {error} 
      resultCount = {shows.length}
      hasSearched = {hasSearched}
      />

      <ShowList
        shows = {shows}/>
        </>
      }/>


      <Route path ="/shows/:id" element={<ShowDetail />} />
    </Routes>
  )
}

export default App
