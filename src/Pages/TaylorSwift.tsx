import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';
import '../Styles/TaylorSwiftStyles.css';
import Card from '../Components/TestCards';


const TaylorSwift = () => {
  return (
    <div className='page'>
      taylor swift 

<div className='cards-container'>
      <Card />
      <Card />
      <Card />
</div>



      {/* <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Taylor Swift") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div> */}

    </div>
  )
}

export default TaylorSwift
