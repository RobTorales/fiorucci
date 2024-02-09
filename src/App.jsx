import React from 'react';
import { useState } from 'react';
import appFirebase from "./firebase/firebaseConfig.js";
import { getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(appFirebase)
import './App.css'
import Login from './components/Login.jsx';
import NavBar from "./components/NavBar.jsx";
import Home from './components/Home.jsx';

function App() {

  const [ usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null);
    }
  })
  return (
    <div>
      { usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
    </div>
  )
}

export default App
