import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';

const Fearless = () => {
  return (
    <div className='page'>
      fearless

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Fearless") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

    </div>
  )
}

export default Fearless
