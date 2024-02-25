import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';
import '../Styles/StyledComponents'

import styled from 'styled-components'


const Midnights = () => {



// Use Title and Wrapper like any other React component – except they're styled!

  return (
    <div className='page'>
    




      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Midnights") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

      


    </div>
  )
}

export default Midnights
