import React from 'react'
import {Grid as Loader} from 'react-loader-spinner';

export const Preloading = () => {
  return (
    <div className='LoaderCSS flex justify-center items-center'>
        <Loader type="Puff" color="#00BFFF" height="80" />        
    </div>
  )
}
