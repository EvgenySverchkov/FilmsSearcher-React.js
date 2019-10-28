import React from 'react';

export default function SearchField({handlerClick}){
  return(
    <form id="search_form" onSubmit={(e)=>{e.preventDefault(); handlerClick(e.target.elements.movieName.value)}}>
      <input id="search_field" type="text" name="movieName" placeholder="Enter movie title"/>
      <input id="search_button" type="submit" value="Find" />
    </form>
  );
}
