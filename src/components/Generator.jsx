import React, { useState } from 'react'
import { Footer } from './Footer'
import QR from '../images/QR-Gen-Logo.png'
import { Results } from './Results'

import { useUrlContext } from '../context/UrlProvider'

export const Generator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const { UpdateUrl, isVisible, setIsVisible } = useUrlContext();

  const clickGenerate = () => {
    if (!inputValue) {
      var element = document.getElementById('input');
      element.classList.add('shake-horizontal');
    }
    else {
      UpdateUrl(inputValue)
      setIsVisible(!isVisible);
      var element = document.getElementById('input');
      element.classList.remove('shake-horizontal');

    }
  }

  return (
    <>
      {isVisible && <Results />}
      <main>
        <div className="top-logo-container">
          <img src={QR} alt="QR Generator" />
        </div>

        <div className="main-container">
          <input type="text" name="text" className="input" id="input" placeholder="Enter Text here...." value={inputValue} onChange={handleInputChange} required />
          <button className="submit" id="submit" onClick={clickGenerate}>GENERATE</button>
        </div>
      </main>
      <Footer />
    </>
  )
}
