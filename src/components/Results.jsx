import React, { useState } from 'react'
import { Loading } from './Loader';
import { MdCancel } from 'react-icons/md';

import { useUrlContext } from '../context/UrlProvider';

export const Results = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { setIsVisible, imageUrl } = useUrlContext();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const downloadImage = (format) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url; 
        link.download = `qr-code.${format}`; 
        
        document.body.appendChild(link);
        
        link.click();
        
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };
  

  return (
    <>
      <div>
        <div className="Qr-container" id="Qr-container">
          <div className="imageContainer">
            {!imageLoaded && <Loading />}
            <img src={imageUrl} alt="" className="qr-code" id="qr-code" onLoad={handleImageLoad} />
          </div>
          <div className="buttonContainer">
            <div className="downloadBtnContainer">
              <h1 className="downloadHeading">Download</h1>
              <div className="buttonRow">
                <button className="download" id="forjpg" onClick={() => downloadImage('jpg')}>JPG</button>
                <button className="download" id="forpng" onClick={() => downloadImage('png')}>PNG</button>
                <button className="download" id="forsvg" onClick={() => downloadImage('svg')}>SVG</button>
              </div>
            </div>
            <MdCancel className="md-cancel-icon" onClick={() => setIsVisible(false)}/>
          </div>
        </div>
      </div>
    </>
  )
}
