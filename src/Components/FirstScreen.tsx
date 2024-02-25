import '../Styles/FirstScreenStyles.css';
import CSS from 'csstype';

interface FSitem {
    background: string;
    blurb: string;
  
  }
  
  interface FirstScreenProps {
    FSitems: FSitem[];
  }

  

const FirstScreen: React.FC<FirstScreenProps>  = ({FSitems}) => {


  return (
    <div className='screen'>
        {FSitems.map((item, key) => (
            <div>
            <div className="background" style={{backgroundImage: `url(${item.background})`}}> </div>
            <p className='blurb' >{item.blurb}</p>  
            </div>       
        ))};
      
      
    </div>
  )
}

export default FirstScreen
