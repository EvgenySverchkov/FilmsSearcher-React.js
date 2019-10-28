/*let delay = ()=>new Promise(res=>setTimeout(res, 15000));*/
export default function(movieName){
  let result = fetch(`http://omdbapi.com/?apikey=4a3b711b&s=${movieName}`)
    .then((data)=>data.json())
    .then(data=>!data.Search ? undefined : data.Search);
/*let delayFetch = delay().then(()=>result);*/
    return result;
}
