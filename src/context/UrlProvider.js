import React, { createContext, useContext, useState } from 'react';

// Create context.
const UrlContext = createContext();

// Context Provider
export const UrlProvider = ({ children }) => {
    // Visibility of the Result Component. needed on generate component when generate, needed on result component when cancel.
  const [isVisible, setIsVisible] = useState(false);


    // state of search url. Generator -> Context -> Results
    const [url, setUrl] = useState('');

    // state of Image Url.
    const [imageUrl, setImageUrl] = useState('');

    const UpdateUrl = async (searchUrl) => {
        setUrl(searchUrl)
        let apiLink = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=30&color=1bb6ec&data=${encodeURIComponent(searchUrl)}`;
        setImageUrl(apiLink);
    }

    return (
        <UrlContext.Provider value={{ url, imageUrl, UpdateUrl, isVisible, setIsVisible}}>
            {children}
        </UrlContext.Provider>
    )

}

// Export Context.
export const useUrlContext = () => useContext(UrlContext);