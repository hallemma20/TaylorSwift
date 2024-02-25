import {useState} from 'react';
import '../Styles/ImageSliderStyles.css';

const ImageSlider: React.FC<any> = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    /* newindex = if isfirst is true then return slideslenght-1 else return currentindex-1 */
    const goToPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    /* new index = if islast is true then return 0 else return currentindex plus 1 */
    const goToNext = () => {
        const isLast = currentIndex === slides.length -1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }


    const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <div className='image-container'>
      <div className='right-arrow' onClick={goToNext}>⇢</div>
      <div className='left-arrow' onClick={goToPrevious}>⇠</div>
      <div className="image" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
      <div className='dots-container'>
      {slides.map((slide:any, slideIndex:any) => (
        <div key ={slideIndex} onClick={() => goToSlide(slideIndex)} className='dots'>•</div>
      ))}
      </div>
    </div>
  )
}

export default ImageSlider
