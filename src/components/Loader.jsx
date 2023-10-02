import React from 'react'
import {Puff as Loader} from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='LoaderCSS flex justify-center items-center'>
        <Loader type="Puff" color="#00BFFF" height="80" />        
    </div>
  )
}
