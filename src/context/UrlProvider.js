import React, { createContext, useContext, useState } from 'react';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

    const [url, setUrl] = useState('');

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

export const useUrlContext = () => useContext(UrlContext);