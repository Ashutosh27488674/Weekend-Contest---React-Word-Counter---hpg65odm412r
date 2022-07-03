import React from 'react'
import '../styles/App.css';
import {useState,useEffect} from 'react';
export default function App() {


  return (
    const [sliderVal,setSliderVal]=useState(16);
    const [limitWord,setLimitWord]=useState(50);
    const [word,setWords]=useState("");
    
  
    <div id="main">
      <div>
      <label>Font size picker</label>
      <input type="range"
        id="fontSize-input"
        value={sliderVal}
        min="16"
        max="32"
        onChange={(e)=>setSliderVal(+e.target.value)}
        />
      </div>
       <div>
          <label>Word limit input</label>
          <input type="number"
                 id="char-limit-input"
                  value={limitWord}
                  onChange={(e)=>setLimitWord(+e.target.value)}
             />
          </div>
       <div>
               <textarea placeholder="Enter words here"
                          value={words}
                          style={{fontSize:sliderVal}}
                          onChange={(e)=>setWords(e.target.value)}
                          maxLength={limitWord}
</textarea>
          </div> 
<div id="word-counter">
  Total number of words written{" "}
{words.split(/\s+/).filter((e)=>e.length!==0).length}
  </div>
<div id="char-counter">
  Total number of characters used {words.length}
  </div>
    </div>
  )
}

