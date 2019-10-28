import React, {useState} from 'react';

import MoviePoster from './MoviePoster.js';
import Loader from './Loader.js';
import SearchField from './SearchField.js';
import NotFoundScreen from './NotFoundScreen.js';
import getMovieData from '../services/getMovies.js';

export default function MovieGalary(){
  let[components, setComponents] = useState([]);

  async function handlerSearchClick(movieName){
    if(movieName){
      setComponents(<Loader />);
      let resultArr = await getMovieData(movieName);

      if(!resultArr){
        setComponents(<NotFoundScreen/>);
      }else{
        let buff=[];
        for(let i=0; i<resultArr.length; i++){
          buff.push(<MoviePoster key={i} imgUrl={resultArr[i].Poster} title={resultArr[i].Title}/>);
        }
        setComponents(buff);
      }
    }else{
      setComponents([]);
    }
  }

  return(
    <div id="app_wrapper">
      <SearchField handlerClick={handlerSearchClick}/>
      <div id="galary_wrap">{components}</div>
    </div>);
}
