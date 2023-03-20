const URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = process.env.REACT_APP_API_KEY;
const PART = "&part=snippet";
const MAX_RESULTS = "&max_results=12";

export function searchByTerm(searchState) {
  const options = {
    method: "GET",
    header: { "Allow-Control-Allow-Origin": "*" },
  };
  return fetch(
    `${URL}${API_KEY}&q=${searchState}${PART}${MAX_RESULTS}`,
    options
  ).then((response) => response.json());
}
