import '../Styles/TwoColumnStyles.css'

const ColumnItem:React.FC<any> = ({ image, text}) => {
  return (
    <div className='column'>
        <div className="column-body">
        <img alt='taylor' src={image} />
        <p>{text}</p>
        </div>
    </div>
  )
}

export default ColumnItem
