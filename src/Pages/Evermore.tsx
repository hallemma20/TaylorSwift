import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';

const Evermore = () => {
  return (
    <div className='page'>
      evermore 

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Evermore") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

    </div>
  )
}

export default Evermore
