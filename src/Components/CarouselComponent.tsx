import 'react-multi-carousel/lib/styles.css';
import '../Styles/CarouselStyles.css';
import {useState} from 'react';


const CarouselComponent: React.FC<any> = ({albumSongs}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? albumSongs.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () =>{
    const isLast = currentIndex === albumSongs.length-1;
    const newIndex = isLast ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
  }

  const goToSong = (songIndex:any) => {
    setCurrentIndex(songIndex);
  }


  return (
    <div className='carousel-container'>
      <div className='album-image' style={{backgroundImage : `url(${albumSongs[currentIndex].url})`}}></div>
      
      <div className='left-arrow' onClick={goToPrevious}>L</div>
      <div className='right-arrow' onClick={goToNext}>R</div>

      <div className='dots-container'>
        {albumSongs.map((song:any, songIndex:any) => (
          <div className='dots' key={songIndex} onClick={() => goToSong(songIndex)}>D</div>
        ))}
      </div>

    </div>
  )}

export default CarouselComponent

