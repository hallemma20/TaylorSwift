import testImage from '../assets/Random/erastour.jpg';
import '../Styles/TaylorSwiftStyles.css';

const TestCards = () => {
  return (
    <div className="test-card">
        <div className="card-top">
            <h1>Card</h1>
        </div>

        <div className="card-body">
            <img src={testImage}></img>
        </div>
        <div> 
            <p>Card component rendered inside a container </p>
        </div>
    </div>
  )
}

export default TestCards
