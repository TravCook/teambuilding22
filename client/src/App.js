import React, {useState, useEffect} from 'react'
import './App.css';
import CardContainer from './components/cardContainer/cardContainer.js';
import OptionsMenu from './components/optionsMenu/optionsMenu';
import NavbarEl from './components/navbar/navbar.js'
import TeamView from './components/teamView/teamView.js'
// import BenchView from './components/benchView/benchView.js';
// import BullpenView from './components/bullpenView/bullpenView';




function App() {
  const [filteredPlayers, setFilterPlayers] = useState()
  const [allPlayers, setPlayers] = useState()
  const [filterStatus, setFilter] = useState()
  const [rarityFilter, setRarity] = useState()
  const [positionFilter, setPosition] = useState()
  let rarity =[]
  let position =[]

  const getAllCards = () => {
    console.log("this function runs")
    fetch("/api/cards")
    .then((res) => 
      res.json()
    ).then((data) => {
      setPlayers(data)
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log("rarity: " + rarity)
    // console.log("position: " + position)
    if(rarity && position){
      const submitPos = position
      const submitRar = rarity
      setPosition(submitPos)
      setRarity(submitRar)
      console.log(rarityFilter + " " + positionFilter)
    }
    cardRender()
    
  }

  const cardRender = () => {
    console.log(rarityFilter ,  positionFilter , allPlayers)
    if(allPlayers){
      return(
          <TeamView players={allPlayers} />
        )
    }
  }
  useEffect(() => {
    getAllCards()
  }, [])

  const filterChange = (e) => {
    if(e.target.checked){
      //these lines of code will add to the arrays for filtering
      if(e.target.id === "Diamond" ||e.target.id === "Gold" ||e.target.id === "Silver" ||e.target.id === "Bronze" ||e.target.id === "Common"){
        rarity.push(e.target.id)
      }else{
        position.push(e.target.id)
      } 
    }else if(!e.target.checked){
      if(e.target.id === "Diamond" ||e.target.id === "Gold" ||e.target.id === "Silver" ||e.target.id === "Bronze" ||e.target.id === "Common"){
        let removed = rarity.filter((el) => {
          return el !== e.target.id
        })
        rarity = removed
      }else{
        let removed = position.filter((el) => {
          return el !== e.target.id
        })
        position = removed
      }
    }
  }


  return (
    
    <div className="App">
      <NavbarEl />
      {/* <OptionsMenu filterChange={filterChange} formSubmit={formSubmit} players={allPlayers} /> */}
      {cardRender()}
      {/* <TeamView players={allPlayers}/> */}
      {/* <BenchView players={allPlayers}/> */}
      {/* <BullpenView /> */}
    </div>
  );
}

export default App;
