import React from 'react'
import '../Styles/AllPageStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';
import FirstScreen from '../Components/FirstScreen';
import background from '../assets/Lover/background.jpg';
import text from '../assets/Lover/lover-text.png';
import '../Styles/LoverStyles.css';

const Lover = () => {

  var font = "font-family: 'Satisfy', cursive;";
  var blurb = "Taylor Swift's 'Lover' album, released in 2019, marked a significant shift in her musical journey. Departing from the darker themes of her previous work, Lover embraced a more optimistic and romantic perspective on love and life. The title track, Lover, set the enchanting tone of the album, exploring the beauty and vulnerability of a deep romantic connection. Throughout the record, Swift showcased her exceptional songwriting, intertwining relatable stories with emotional depth, making Lover a heartfelt and captivating experience for her fans. With Lover, Taylor Swift not only presented a collection of catchy and infectious pop anthems but also delved into her personal growth as an artist and woman. The albums diverse range of tracks allowed Swift to experiment with different musical styles, blending pop, ballads, and folk-infused melodies seamlessly. From the empowering anthem You Need To Calm Down, advocating for LGBTQ+ rights, to the introspective The Archer, where she courageously confronts her own vulnerabilities, Lover showcased Swifts artistic versatility and authenticity.Overall, Lover symbolized a pivotal moment in Taylor Swifts career, cementing her position as one of the most influential artists of her generation. With its enchanting melodies, emotional depth, and genuine storytelling, the album resonated deeply with fans worldwide, solidifying its place as one of Swift's most beloved and memorable works."
  var FirstScreenProps=[
    { background: background, blurb: blurb, font: font},
  ];

  return (
    <div className='page'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Satisfy&display=swap');
      </style>
      

      <div className='lover-first-screen'>
        <FirstScreen FSitems={FirstScreenProps} />
      </div>

      <div className="textImage" style={{backgroundImage: `url(${text})`}}> </div>
      


      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Lover") 
        {
        return <AlbumCoverImage image ={albumCoverImage.image} />
        }
        return null
      })}
      </div>

    </div>
  )
}

export default Lover
