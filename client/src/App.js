import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import {Dropdown} from 'react-bootstrap'
import CardContainer from './components/cardContainer/cardContainer.js';





function App() {
  const [diamondPlayers, setDiamonds] = useState()
  const [bronzePlayers, setBronzes] = useState()
  const [goldPlayers, setGolds] = useState()
  const [silverPlayers, setSilvers] = useState()
  const [commonPlayers, setCommons] = useState()
  const [allPlayers, setPlayers] = useState()
  const [filterStatus, setFilter] = useState()

  const getAllCards = () => {
    console.log("this function runs")
    fetch("/api/cards")
    .then((res) => 
      res.json()
    ).then((data) => {
      setDiamonds(data.diamonds)
      setBronzes(data.bronzes)
      setGolds(data.golds)
      setSilvers(data.silvers)
      setCommons(data.commons)
      setPlayers(data.allPlayers)
    })
  }
  const logging = () => {
    if(filterStatus === "diamond"){
      return(
        <CardContainer players={diamondPlayers} />
      )
    }else if(filterStatus === "gold"){
      return(
        <CardContainer players={goldPlayers} />
      )
    }else if(filterStatus === "silver"){
      return(
        <CardContainer players={silverPlayers} />
      )
    }else if(filterStatus === "bronze"){
      return(
        <CardContainer players={bronzePlayers} />
      )
    }else if(filterStatus === "common"){
      return(
        <CardContainer players={commonPlayers} />
      )
    }
  }

  useEffect(() => {
    getAllCards()
  }, [])

  const filterChange = (e) => {
    setFilter(e.target.id)
    console.log(e.target.id)
  }

  return (
    
    <div className="App">

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search Filter
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="diamond" onClick={filterChange}>Diamond Players</Dropdown.Item>
          <Dropdown.Item id="gold" onClick={filterChange}>Gold Players</Dropdown.Item>
          <Dropdown.Item id="silver" onClick={filterChange}>Silver Players</Dropdown.Item>
          <Dropdown.Item id="bronze" onClick={filterChange}>Bronze Players</Dropdown.Item>
          <Dropdown.Item id="common" onClick={filterChange}>Common Players</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {logging()}
    </div>
  );
}

export default App;
