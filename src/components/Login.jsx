import React from 'react'
import { useState } from 'react';
import appFirebase from "../firebase/firebaseConfig.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)
import './Login.css'

const Login = () => {

  const [registrando, setRegistrando] = useState(false);

  const functAuthentication = async (e) =>{
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if(registrando){
      try{
        await createUserWithEmailAndPassword(auth,correo,contraseña)
      }catch(error){
        alert("Asegurese de que la contraseña tenga mas de 8 caracteres")
      }
    }else{
      try{
        await signInWithEmailAndPassword(auth,correo,contraseña)
      }catch(error){
        alert("El correo o la contraseña son incorrectos")
      }
      
    }
  }

  return (
    <div className="container-login">
        <div className="div-login rounded">
            <div className="login  text-white">
                <h2 className="text-white">Iniciar Sesion</h2>
                <div className="logo-login">
                    <img src="/img/logo-negro.png" alt="Burger Factory" width="320"/>
                </div>
                <form onSubmit={functAuthentication}>
                    <div className="mb-3">

                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                       
                        <input type="password" className="form-control" id="password" placeholder="password"/>
                    </div>
                    <div className="div-boton">
                        <button type="button" className="btn btn-secondary" id="btnLogIn">{registrando ? "Registrate": "Iniciar Sesión"}</button>
                        <p className="text-white ">{registrando ? " Ya tienes cuenta": "No tenes una cuenta"}<button onClick={()=> setRegistrando(!registrando)}className="btn btn-secondary">{registrando ? "inicia sesion": "registrate"}</button></p>
                    </div>
                    
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login