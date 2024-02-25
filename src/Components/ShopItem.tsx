import '../Styles/ShopStyles.css';


const ShopItem: React.FC<any> = ({title, url}) => {
  return (

  <div className="card">

    <div className="card-body">
      <img className='image' src={url} alt='taylor'/>
    </div>

  </div>
  )
}

export default ShopItem
