import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import Button from 'react-bootstrap/Button'
import CardContainer from './components/cardContainer/cardContainer.js';





function App() {
  const [diamondPlayers, setDiamonds] = useState()

  const getAllCards = () => {
    fetch("/api/cards")
    .then((res) => 
      // console.log(response)
      res.json()
    ).then((data) => {
      setDiamonds(data.diamonds)
      console.log(data)
    })
  }
  const logging = () => {
    if(diamondPlayers){
      return(
        <CardContainer players={diamondPlayers} />
      )
    }
    
  }
  return (
    <div className="App">
      <Button onClick={getAllCards}>DISPLAY DIAMOND PLAYERS</Button>
      {logging()}
    </div>
  );
}

export default App;
