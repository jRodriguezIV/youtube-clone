import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import Header from "./Components/Common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Nav from "./Components/Common/Header/Nav";
import Video from "./Components/Pages/Video/Video";
import ErrorMessage from "./Components/Common/Error/ErrorMessage";
import { searchByTerm } from "./api/fetch";

function App() {
  const [searchState, setSearchState] = useState("dimloons");
  const [errorState, setErrorState] = useState(false);
  const [videoList, setVideoList] = useState([]);


  useEffect(() => {
    searchByTerm(searchState)
      .then((response) => {
        if(response.items) {
            setVideoList(response.items);
            setErrorState(false)
        } else if (errorState === false) {
          setErrorState(true)
        }
      });
  }, [searchState]);


  return (
    <>
      <Router>
        {!errorState ? (
          <>
            <Header searchState={searchState} setSearchState={setSearchState} />
            <Nav />
          </>
        ) : (
          <ErrorMessage errorState={errorState} setErrorState={setErrorState} setSearchState={setSearchState}  />
        )}

        <Routes>
          <Route
            path="/"
            element={
              <Home
                setErrorState={setErrorState}
                setSearchState={setSearchState}
                searchState={searchState}
                videoList={videoList}
                setVideoList={setVideoList}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
