import '../Styles/TwoColumnStyles.css';
import ColumnItem from './ColumnItem';

const TwoColumn : React.FC<any> = ({ columnItems }) => {
  return (
    <div className='two-column'>

    {columnItems.map((item:any, key:any) => (
        <div className='column-container'>
        <ColumnItem key={key} image={item.image} text={item.text}/>
        </div>
    ))}

    </div>
  )
}

export default TwoColumn
