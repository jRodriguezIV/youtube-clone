import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Pages/Home/Home';
import { useState } from 'react';
import Video from './Components/Pages/Video/Video';


function App() {
const [searchState, setSearchState] = useState('kittens')







  return (
    <>
    <Router>
    <Header searchState={searchState} setSearchState={setSearchState}/>
      <Routes>
        <Route path='/' element={<Home setSearchState={setSearchState} searchState={searchState}/>} />
        <Route  path='/:id' element={<Video/>}  />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
