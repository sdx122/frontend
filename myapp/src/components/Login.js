import React, { useState } from 'react'
import { auth } from "../firebase";
import './Login.css';
import { Link,  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');


  const loginn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password).
    then((auth) => {
      
        navigate('/')
        
    }).catch(error => alert(error.message));
  }

  const signup = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    . then((auth) => {
        if(auth){
          alert('user successfully creted');
          navigate('/login');
        }

      }).catch(error => 
        alert(error.message )
      )
  }

  return (
    <>
      <div className="box">
        <h1>login page</h1>
        <form className='form1'>
          <h1>email</h1>
          <input type='email' className='inp1' value={email} onChange={e => Setemail(e.target.value)} />
          <h1>password</h1>
          <input type='password' className='inp2' value={password} onChange={e => Setpassword(e.target.value)} />
          <br />
          <button  className='login' onClick= {loginn}>login</button>

          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          
            <button  className='signup' onClick= {signup}>create a new account

          </button>

          <p>If u are haven't registered yet</p>         
        </form>

      </div>




    </>
  )
}




export default Login

