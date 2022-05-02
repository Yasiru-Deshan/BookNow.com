import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/user/home/index';
import Movie from './pages/user/movie/movie';
import Watch from './pages/user/movie/watch';
import Browse from './pages/user/Browse/Browse';
import Footer from './components/Footer';
import './components/Footer/FooterElements'
import Favorites from './pages/user/favorites/favorites';
import Booking from './pages/user/booking/booking';
import Cart from './pages/user/cart/cart'
import Payment from './pages/user/payment/payment';
import TheatreList from './pages/movieadmin/theatrelist';
import Theatre from './pages/movieadmin/theatre';
import MovieList from './pages/movieadmin/movielist';
import NewMovie from './pages/movieadmin/newmovie';


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
        <Route path='/cart' element={<Cart/>} exact/>
        <Route path='/payment' element={<Payment/>} exact/>
        <Route path='/admin/theatres' element={<TheatreList/>} exact/>
        <Route path='/admin/theatre/:id' element ={<Theatre/>} exact/>
        <Route path='/admin/movies' element={<MovieList/>} exact/>
        <Route path='/admin/newmovie' element={<NewMovie/>} exact/>
   
  </Routes>
      <Footer/>
	</Router>

 
  );
}

export default App;