import React from 'react';

export default function({movieObj, imgUrl, title}){
  function select_img(img){
    if(img!=="N/A"){
      return (<img id="poster_img" src={img} alt={title}/>)
    }else{
      return (<img id="none_poster_img" src={require('../loader.png')} alt={title}/>)
    }
  }

  return (
    <div id="poster_wrap">
      <p>{title}</p>
      {select_img(imgUrl)}
    </div>
  );
}
