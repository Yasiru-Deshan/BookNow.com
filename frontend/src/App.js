import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/index';
import Movie from './pages/movie/movie';
import Watch from './pages/movie/watch.js';
import Browse from './pages/Browse/Browse';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';
import './components/Footer/FooterElements'
import Favorites from './pages/favorites/favorites';
import Booking from './pages/booking/booking';


const App = ()=> {

 

  const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (


    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>    
      <Routes>
     
        <Route path='/' element={<Home/>} exact/>
        <Route path='/movie/:id' element={<Movie/>} exact/>
        <Route path='/watch/:id' element={<Watch/>} exact/>
        <Route exact path='/favorites' element={<Favorites/>}/>
        <Route path='/browse' element={<Browse/>} exact/>
        <Route path='/booking/:id' element={<Booking/>} exact/>
      
   
  </Routes>
      <Footer/>
	</Router>

 
  );
}

export default App;