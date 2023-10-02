import React, { useState } from 'react'
import { Footer } from './Footer'
import QR from '../images/QR-Gen-Logo.png'
import { Results } from './Results'

// import context.
import { useUrlContext } from '../context/UrlProvider'

export const Generator = () => {
  // input values -> Initial is null.
  const [inputValue, setInputValue] = useState("");

  // Update initial Values from onchange
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Call context -> Update function.
  const { UpdateUrl, isVisible, setIsVisible } = useUrlContext();

  // Function click the button.
  const clickGenerate = () => {
    if (!inputValue) {
      // If input value is null, then get element of input then add class 'shake-horizontal' in it for error animation.
      var element = document.getElementById('input');
      element.classList.add('shake-horizontal');
    }
    else {
      // Call the UpdateUrl function from the context to update the URL
      UpdateUrl(inputValue)
      // Enable the visibility of the Result component.
      setIsVisible(!isVisible);
      // If input has value, then remove 'shake-horizontal' class from the input tag.
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
