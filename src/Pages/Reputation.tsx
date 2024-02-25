import '../Styles/AllPageStyles.css';
import '../Styles/ReputationStyles.css';
import AlbumCoverImage from '../Components/AlbumCoverImage';
import {AlbumCovers} from '../Components/AlbumCovers';
import text from '../assets/Reputation/reputation-text.jpg';
import newspaper from '../assets/Reputation/paper-background.jpg';
import FirstScreen from '../Components/FirstScreen';
import Carousel from '../Components/CarouselComponent';
import ready from '../assets/Reputation/songs/ready-for-it.png'
import endGame from '../assets/Reputation/songs/end-game.png';
import bad from '../assets/Reputation/songs/i-did-something-bad.png';
import blame from '../assets/Reputation/songs/dont-blame-me.png';

const Reputation = () => {

  var blurb = "Taylor Swift's Reputation album, released in 2017, marked a defining moment in the pop superstar's career. This highly anticipated record showcased a bold and unapologetic side of Taylor, shattering her previous wholesome image. Fueled by edgy electro-pop and synth-infused production, Reputation delved into themes of love, heartbreak, and the harsh scrutiny of the media spotlight. Swift fearlessly confronted her critics, turning their narratives on their heads, and embraced the idea of being both loved and feared. Standout tracks like 'Look What You Made Me Do' and 'Delicate' showcased her unmatched ability to craft catchy hooks with lyrics that resonated with fans worldwide. The album's success not only solidified Taylor Swift's position as a dominant force in the music industry but also proved her mastery in transforming personal experiences into relatable anthems that continue to captivate audiences. Reputation remains a testament to Taylor's resilience and artistic growth, leaving an indelible mark on the pop music landscape.";
  var FirstScreenProps=[
    { background: newspaper, blurb: blurb },
  ];


  const AlbumSongs = [
    {url: ready},
    {url: endGame},
    {url: bad},
    {url: blame}
  ];

  return (
    <div className='page'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    </style>
      
      <div className='firstscreen'>
        <FirstScreen FSitems={FirstScreenProps} />
      </div>

      <div>{AlbumCovers.map((albumCoverImage, key) => {
        if (albumCoverImage.name === "Reputation") 
        {
          return <AlbumCoverImage image ={albumCoverImage.image} />
        } 
        return null
        })}
      </div>

      <div className="textImage" style={{backgroundImage: `url(${text})`}}> </div>
      
        <div>
          <Carousel albumSongs={AlbumSongs}/>
        </div>
      
    
    </div>
  )
}

export default Reputation
