//envelop code for later
// const URL = process.env.{api_variable_name}
import YouTube from "react-youtube";

const URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = "?key=AIzaSyALVmpP1D8VNsgaPXXBdxDLYk6h2ugdQKQ";
const SEARCH_TERM = '&q=bats'     //Change bats for Search State value.
const PART = "&part=snippet";
const MAX_RESULTS = "&max_results=8";

// SEARCH_TERM = `q={searchTerm}`
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyALVmpP1D8VNsgaPXXBdxDLYk6h2ugdQKQ&q=bats&part=snippet&max_results=50
// HTTPS+API_KEY+SEARCH_TERM

export function searchByTerm(/*searchTerm */) {
  return fetch(`${URL + API_KEY +SEARCH_TERM + PART + MAX_RESULTS}`).then((response) => {
    return response.json();
  });
}

//GET https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY] HTTP/1.1
