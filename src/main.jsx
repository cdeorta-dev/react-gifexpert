import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './style.css'
/*
      const apiKey = '7i25vI1amJ8tCgiLWrAxOcwkJNIzDVBb';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  
    <GifExpertApp/> 
     
  </React.StrictMode>,
    
);
