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
import ShopItem from '../Components/ShopItem';
import '../Styles/ShopStyles.css';


interface ShopItem {
    url: string;
    title: string;
}
  
interface ShopProps {
    shopItems: ShopItem[];
}

const Shop:React.FC<ShopProps> = ({ shopItems }) => {
<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@200&family=IM+Fell+DW+Pica:ital@1&family=Permanent+Marker&family=Satisfy&display=swap');
</style>



  return (
    <div className="shop">
   
      <div className='shop-map'>
        {shopItems.map((item:any, key:any) => {
            return <ShopItem key={key} title={item.title} url={item.url}/>
        })}
      </div>
    
    </div>
  )
}

export default Shop
