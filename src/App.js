import React, {useState, useEffect} from 'react';
import SearchField from './components/SearchField.js';
import request from './services/getMovies.js';
import MoviePoster from './components/MoviePoster.js';
import './App.css';

function App() {

  return (<>
    <SearchField/>
    </>);
}

export default App;
