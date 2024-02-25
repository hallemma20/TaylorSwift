import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';

const Red = () => {
  return (
    <div className='page'>
      red 

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Red") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

    </div>
  )
}

export default Red
