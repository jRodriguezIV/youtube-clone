import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';


function App() {


  return (
    <>
    <Router>
      {/* Nav */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* Footer */}
    </Router>
    </>
  );
}

export default App;
