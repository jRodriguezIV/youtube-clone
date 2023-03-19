const URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = process.env.REACT_APP_API_KEY;
const PART = "&part=snippet";
const MAX_RESULTS = "&max_results=12";

// SEARCH_TERM = `q={searchTerm}`
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyCb93nTzM1HA9bMi8-MIvMCoRXSz5ZDWMg&q=bats&part=snippet&max_results=10
// HTTPS+API_KEY+SEARCH_TERM

export function searchByTerm(searchState) {
  return fetch(`${URL}${API_KEY}&q=${searchState}${PART}${MAX_RESULTS}`).then((response) => response.json());
}

//GET https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY] HTTP/1.1
