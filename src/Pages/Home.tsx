import React from 'react'
import '../Styles/AllPageStyles.css';
import '../Styles/HomeStyles.css';

import TS from '../assets/TS/album-cover.jpg'
import Fearless from '../assets/Fearless/album-cover.jpg'
import SpeakNow from '../assets/SpeakNow/album-cover.jpg'
import Red from '../assets/Red/album-cover.jpg'
import A1989 from '../assets/1989/album-cover.jpg'
import Reputation from '../assets/Reputation/albumcover.jpg'
import Lover from '../assets/Lover/album-cover.jpg'
import Folklore from '../assets/Folklore/album-cover.jpg'
import Evermore from '../assets/Evermore/album-cover.jpg'
import Midnights from '../assets/Midnights/album-cover.jpg'
import Shop from '../Components/Shop';
import TwoColumn from '../Components/TwoColumn';
import Taylor from '../assets/Random/taylor-rep.jpg';


const Home:React.FC<any> = () => {

  const slides=[
    {url: TS, title: 'Taylor Swift'},
    {url: Fearless, title: 'Fearless'},
    {url: SpeakNow, title: 'Speak Now'},
    {url: Red, title: 'Red'},
    {url: A1989, title: '1989'},
    {url: Reputation, title: 'Reputation'},
    {url: Lover, title: 'Lover'},
    {url: Folklore, title: 'Folklore'},
    {url: Evermore, title: 'Evermore'},
    {url: Midnights, title: 'Midnights'},
  ]

  const columnItems=[
    {image: Taylor, text: 'Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. '},
    {image: Taylor, text: 'Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. Taylor Swift. '}

  ]

  return (
    <div className='page'>
          <TwoColumn columnItems={columnItems}/>

      <Shop shopItems={slides} />

  

    </div>
  )
}

export default Home
