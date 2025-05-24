import React from 'react';
import {Routes,Route,BrowserRouter} from "react-router-dom"

import Home from './Components/Home';
import Eff from './Components/Eff';
import Navbar from './Components/navbar/Navbar';
import Mod from './Components/mod/Mod';
import Contexts from './Components/Context/Contexts';
import Lazyloading from './Components/Lazyloading';
import Parent from './Components/cb/Parent';
import Reducer from './Components/useReducer/Reducer';
import Rd from './Components/Redux/Rd';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/eff" element={ <Eff /> } />
      <Route path="/rd" element={ <Rd /> } />
      <Route path="/reducer" element={ <Reducer /> } />
      <Route path="/cb" element={ <Parent /> } /> 
      <Route path="/pchild" element={ <Contexts /> } />
      <Route path="/lazy" element={ <Lazyloading /> } />
      <Route path="/mod" element={ <Mod /> } />
      <Route exact path="/" element={<Home /> } />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
