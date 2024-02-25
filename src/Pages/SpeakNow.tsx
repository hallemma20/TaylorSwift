import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';
import better from '../assets/SpeakNow/better-than-revenge.jpg';
import haunted from '../assets/SpeakNow/haunted.jpg';
import heart from '../assets/SpeakNow/heart.jpg';
import enchanted from '../assets/SpeakNow/enchanted.jpg';
import era from '../assets/SpeakNow/era.jpg';
import city from '../assets/SpeakNow/city.jpg';
import fish from '../assets/SpeakNow/fish.jpg';
import stars from '../assets/SpeakNow/stars.jpg';
import story from '../assets/SpeakNow/story-of-us.jpg';
import reciept from '../assets/SpeakNow/reciept.jpg';

import Shop from '../Components/Shop';



const SpeakNow = () => {

  const shopItems=[
    {url: better, title: 'Better than Revenge'},
    {url: city, title:'Purple City'},
    {url: haunted, title: 'Haunted'},
    {url: era, title: 'Speak Now Era'},
    {url: heart, title: 'Hand Hearts'},
    {url: enchanted, title:'Enchanted'},
    {url: fish, title:'Purple Lake'},
    {url: story, title:'The Story of Us'},
    {url: stars, title: 'Purple Stars'},
    {url: reciept, title: 'Speak Now Reciept'}
  ]

  return (
    <div className='page'>
      speaknow 

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Speak Now") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

      <Shop shopItems={shopItems} />

    </div>
  )
}

export default SpeakNow
