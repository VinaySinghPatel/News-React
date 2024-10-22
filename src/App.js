import React, { Component ,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import NewsPagesecond from './Component/NewsPagesecond';
import LoadingBar from 'react-top-loading-bar'

const App = () =>{

  
  const [progress,editprogres] = useState(0);

  let setProgress = (progress) =>{
    editprogres(progress);
  }
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          
        color='#f11946'
        progress={progress}
      />
          <Routes>
          <Route exact path="/" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="general" PageSize={9} Country="in" Category="general" /></div>} />
          <Route exact path="/Home" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="general" PageSize={9} Country="in" Category="general" /></div>} />
            <Route exact path="/business" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="business" PageSize={9} Country="in" Category="business" /></div>} />
            <Route exact path="/entertainment" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="entertainment" PageSize={9} Country="in" Category="entertainment" /></div>} />
            <Route exact path="/health" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="health" PageSize={9} Country="in" Category="health" /></div>} />
            <Route exact path="/science" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="science" PageSize={9} Country="in" Category="science" /></div>} />
            <Route exact path="/sports" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="sports" PageSize={9} Country="in" Category="sports" /></div>} />
            <Route exact path="/technology" element={<div className="container my-3"><NewsPagesecond setProgress={setProgress} key="technology" PageSize={9} Country="in" Category="technology" /></div>} />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;
