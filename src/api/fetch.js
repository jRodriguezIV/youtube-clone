//envelop code for later
// const URL = process.env.{api_variable_name}
import YouTube from "react-youtube";

const URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = "?key=AIzaSyCb93nTzM1HA9bMi8-MIvMCoRXSz5ZDWMg";
const SEARCH_TERM = '&q=bats' //Change bats for Search State value.
const PART = "&part=snippet";
const MAX_RESULTS = "&max_results=8";

// SEARCH_TERM = `q={searchTerm}`
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyCb93nTzM1HA9bMi8-MIvMCoRXSz5ZDWMg&q=bats&part=snippet&max_results=10
// HTTPS+API_KEY+SEARCH_TERM

export function searchByTerm() {
  return fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDreUDK_wC1euAK2AT2SA9-iQpgGz2wV0k&q=bats&part=snippet&max_results=12').then((response) => {
    return response.json();
  });
}

//GET https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY] HTTP/1.1
