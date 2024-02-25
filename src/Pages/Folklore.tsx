import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';

const Folklore = () => {
  return (
    <div className='page'>
      folklore

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Folklore") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

    </div>
  )
}

export default Folklore
