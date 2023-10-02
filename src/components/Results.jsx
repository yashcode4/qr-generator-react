import React, { useState } from 'react'
import { Loading } from './Loader';
import { MdCancel } from 'react-icons/md';

// import context.
import { useUrlContext } from '../context/UrlProvider';

export const Results = () => {
  // useState for image loaded or not. Image is not loaded initially.
  const [imageLoaded, setImageLoaded] = useState(false);

  // Call context -> Disable the visibility of the component & fetch the url of the image.
  const { setIsVisible, imageUrl } = useUrlContext();

  // When this function triggered, it sets the setImageLoaded to true.
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Download the image.
  const downloadImage = (format) => {
    // Fetch the image URL
    fetch(imageUrl)
      .then((response) => response.blob()) // Convert the response to a Blob object
      .then((blob) => {
        // Create a temporary URL for the Blob object
        const url = URL.createObjectURL(blob);
        
        // Create an <a> element to trigger the download
        const link = document.createElement('a');
        link.href = url; // Set the href attribute of the link to the temporary URL
        link.download = `qr-code.${format}`; // Set the default download file name with the specified format
        
        // Append the link to the document body
        document.body.appendChild(link);
        
        // Programmatically trigger a click event on the link, initiating the download
        link.click();
        
        // Remove the link from the document body (cleanup)
        document.body.removeChild(link);
        
        // Revoke the temporary URL to release resources
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        // Handle errors, if any, during the download process
        console.error('Error downloading image:', error);
      });
  };
  

  return (
    <>
      <div>
        <div className="Qr-container" id="Qr-container">
          {/* Image Container */}
          <div className="imageContainer">
            {/* When both conditions are true, then this will triggers. */}
            {!imageLoaded && <Loading />}
            {/* onLoad -> Image is loaded, function 'handleImageLoad' is triggered. */}
            <img src={imageUrl} alt="" className="qr-code" id="qr-code" onLoad={handleImageLoad} />
          </div>
          <div className="buttonContainer">
            <div className="downloadBtnContainer">
              <h1 className="downloadHeading">Download</h1>
              <div className="buttonRow">
                {/* Onclick for downloading the image. */}
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
