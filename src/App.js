import { useState } from 'react';
import Navbar from './component/Navbar';
import "./App.css";
import MovieList from './component/MovieList';
import Add from './component/Add';
import Home from './component/Home/Home';
import {Routes,Route}from 'react-router-dom';
import Notfound from './component/Notfound/Notfound';
import { useLocation } from 'react-router-dom';



function App() {
  const location=useLocation()
  console.log("location",location);

 const [movies,setmovies]=useState([
{ 
title:"Derrière les Barreaux",
description:"Jack Stone orchestre délibérément un braquage de banque raté",
posterURL: "https://images.6play.fr/v2/images/1584289/raw?blur=0&fit=scale_crop&format=jpeg&height=630&interlace=1&quality=60&width=1200&hash=5eff5243ea4c5fe976ead4e25303e54ffc51423e",
rate:4,
},
{

  title:"Amazon Hell",
  description:"Trois frères et soeurs mènent une expédition en forêt amazonienne pour retrouver leur père disparu",
  posterURL: "https://picfiles.alphacoders.com/967/96762.jpg",
  rate:3,
},
{
  title:"THE GANGSTERS",
  description:"Jason Statham & Ray Liotta In Superhit Action English Movie",
  posterURL: "https://fr.web.img3.acsta.net/pictures/13/12/27/17/02/415740.jpg",
  rate:2, 
},
{

  title:"Abyss Sharks",
  description:"De grands requins blancs attaquent un bateau de pêche et, à des kilomètres du rivage, les personnes à bord sont obligées de se battre pour sauver leur vie.",
  posterURL: "https://4.bp.blogspot.com/-tx0kcC0lLoQ/TdjDLOgNh3I/AAAAAAAAHE8/y6UNwIcdu2c/s1600/cover.jpg",
  rate:5, 
}

 ]);
 const [title,setTitle]=useState("");
const getrate=rate=>{
  setrate(rate);
};
const [rate,setrate]=useState(1);
const AddMovie=(newmovie)=>{
  setmovies([...movies,newmovie]);
};
const getTitle=title=>{
  setTitle(title);
};
  return (
   
     <div>
      <div> utl location { location.pathname
      
      
      }</div>
      <Navbar getTitle={getTitle} getrate={getrate}/><br/>
      <Routes>
         <Route  path="/"  element={<Home/>}   />
         <Route  path="*"  element={<Notfound/>}   />
         <Route  path="/movies"  element={<MovieList movies={movies}  title={title} rate={rate}/>}   />
      </Routes>
            <br/>
      <Add Addmovie={AddMovie} />

      
    </div>
    
  );
}



export default App