
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotreHistoire from './Pages/NotreHistoire';
import NousTrouver from './Pages/NousTrouver';
import Home from './Pages/Home';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';


function App() {
  return (
   
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path="/notre-histoire" element={<NotreHistoire />} />
      <Route path="/home" element={<Home />} />
      <Route path="/nous-trouver" element={<NousTrouver />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} /> 
      

      
    </Routes>
    </BrowserRouter>

    
    
    
   

   
          
        
  );
}

export default App;


