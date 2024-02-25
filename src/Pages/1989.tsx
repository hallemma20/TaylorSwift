import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';

const A1989 = () => {
  return (
    <div className='page'>
      1989

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "1989") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

    </div>
  )
}

export default A1989
