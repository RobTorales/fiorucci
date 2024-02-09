import React from 'react'
import appFirebase from "../firebase/firebaseConfig.js"
import { getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)
import NavBar from "./NavBar.jsx";
import './Home.css';

const Home = ({correoUsuario}) => {
  return ( 

    <div className="contenedor-home">
      <NavBar/>
      <div className="contenedor-home">
        <div>
        Bienvenido usuario {correoUsuario}<button className="btn btn-primary" onClick={()=> signOut(auth)}>LogOut</button>
        </div>
      </div> 
    </div>
    
    
  )
}

export default Home;