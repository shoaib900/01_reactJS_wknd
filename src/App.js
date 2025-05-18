import React from 'react';
import {Routes,Route,BrowserRouter} from "react-router-dom"

import Home from './Components/Home';
import Eff from './Components/Eff';
import Navbar from './Components/navbar/Navbar';
import Mod from './Components/mod/Mod';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/eff" element={ <Eff /> } />
      <Route path="/mod" element={ <Mod /> } />
      <Route exact path="/" element={<Home /> } />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
