
import './App.css';

import Navbar from './components/Navbar';
import Accpage from './components/Accpage';
import Login from './components/Login';
import Gallery from './components/Gallery';
import axios from 'axios'
import { auth } from './firebase';

import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './components/Home';
import { useEffect, useState } from 'react';
import Hotelll from './components/Hotelll';
import Attractions from './components/Attractions';
import Contactus from './components/Contactus';
// import PlacesFormPage from './components/PlacesFormPage';



// const [Prod,setProd] = useState([]);

// useEffect(() => {
    
//     const response = axios.get('api/products',(req,res) => {
//       res
//     });


// },[])


function App() {





  return (
    <>
     
     <Router>
     {/* <h1>
      welcome back to the homepage
     </h1> */}

    
     <Navbar/>
     {/* <Login/> */}

     <Routes>
      {/* <Route exact path = '/gg' element={}>

      </Route> */}

      <Route exact path ='/' element={<Home/>}>
     
     </Route>
     {/* <Route path="/placesform" element={<PlacesFormPage />} /> */}
      <Route exact path ='/login' element={<Login/>}>
     
     </Route>
      <Route exact path ='/gallery' element={<Gallery/>}>
     
     </Route>
      <Route exact path ='/accpage' element={<Accpage/>}>
     
     </Route>
     <Route exact path ='/hotels' element={<Hotelll/>}>
     
     </Route>
     <Route exact path ='/atts' element={<Attractions/>}>
     
     </Route>
     <Route exact path ='/contactus' element={<Contactus/>}>
     
     </Route>


     </Routes>
     </Router>
      
    
    </>
  );
}

export default App;
