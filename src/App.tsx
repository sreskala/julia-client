import { Link } from 'react-router-dom'
import Lottie from "react-lottie";
//@ts-ignore
import spaceship from './assets/spaceship.json'
import './App.css'

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceship,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      </div>
      <h1>Welcome to Julian Planets!</h1>

    <Link to="/planets">Click to Launch</Link>
    </>
  )
}

export default App
