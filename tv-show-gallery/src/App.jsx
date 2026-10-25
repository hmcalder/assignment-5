import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './SearchForm'

function App() {

  //so we an change a variable
  const [search, setSearch] = useState('');
  //stores the TV shows from TVmaz
  const [shows, setShows] = useState([]);

  //Runs an effect after React renders component 
  useEffect(() => {



  }, []);

  return (

    <>
    <div>
      <h1> TV Show Gallery</h1>
      <p> Search for your favorite tv shows!</p>
    </div>
    <SearchForm search = {search} setSearch={setSearch}/>
    
    </>
  )
}

export default App
