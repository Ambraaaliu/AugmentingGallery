import logo from './logo.svg';
import './App.css';
import Guqin from './Guqin';
import P5Wrapper from 'react-p5-wrapper';
import GuqinBackground from './GuqinBackground';

import './background.js'; 
// import NewFile from './NewFile';

// import first from './blueFlower.png'
// import second from './未标题-7.png'

function App() {
  return (
      <div className="App">
        <Guqin />

      </div>
    // <div className="App">
    //   <NewFile src={first} legend="first legend" credits="I really don't know what should be here"/>
    //   <NewFile src={second} second legend="second legend whatever"
    //   credits="what should I write? the only thing I know is I'm missing you now"/>
    //   <NewFile legend="third legend" 
    //   credits="what should I write, the only thing I know is I'm missing you now"/>
    //   <NewFile/>
    // </div>
  )
}

export default App;
