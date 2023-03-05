
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from "./componentes/Login"
import { Mesero } from "./componentes/Mesero"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path= "/login" element={<Login/>}/>
      <Route exact path= "/mesero" element={<Mesero/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
