export default function(movieName){
  let result = fetch(`http://omdbapi.com/?apikey=4a3b711b&s=${movieName}`)
    .then((data)=>data.json())
    .then(data=>data.Search);

    return result;
}
