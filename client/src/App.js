import React, {useState, useEffect} from 'react'
import './App.css';
import CardContainer from './components/cardContainer/cardContainer.js';
import OptionsMenu from './components/optionsMenu/optionsMenu';
import NavbarEl from './components/navbar/navbar.js'
import RandomTeamView from './components/randomTeamView/randomtTeamView.js'
import RandomBullpenView from './components/randomBullpenView/randomBullpenView';
import TeamPicker from './components/teamPicker/teamPicker';
import SearchModal from './components/searchModal/searchModal';




function App() {
  const [searchedPosition, setSearchPos] = useState()
  const [show, setShow] = useState(false);
  const [searchedPlayers, setSearch] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allPlayers, setPlayers] = useState()
  const [catcherArr, setCatchers] = useState()
  const [starterArr, setStarters] = useState()
  const [relieverArr, setRelievers] = useState()
  const [closerArr, setClosers] = useState()
  const [firstBaseArr, setFirstBasemen] = useState()
  const [secondBaseArr, setSecondBasemen] = useState()
  const [shortstopArr, setShortStops] = useState()
  const [thirdBaseArr, setThirdBasemen] = useState()
  const [leftFieldArr, setLeftFielders] = useState()
  const [centerFieldArr, setCenterFielders] = useState()
  const [rightFieldArr, setRightFielders] = useState()
  const [activePage, setPage] = useState()
  const [activeRoster, setRoster] = useState({
    leftField: undefined,
    centerField: undefined,
    rightField: undefined,
    thirdBase: undefined,
    shortStop: undefined,
    secondBase: undefined,
    firstBase: undefined,
    firstStarter: undefined,
    catcher: undefined
  })
  const rosterSet = (e) => {
    if(searchedPosition === "C"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        console.log(data)
        setRoster({
          ...activeRoster,
          catcher: data})
        setShow(false)
      })
    }
    if(searchedPosition === "1B"){
      console.log("firstBase")
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    firstBase: data})
                    setShow(false)
      })
    }if(searchedPosition === "2B"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    secondBase: data})
                    setShow(false)
      })
    }if(searchedPosition === "SS"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    shortStop: data})
                    setShow(false)
      })
    }if(searchedPosition === "3B"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    thirdBase: data})
                    setShow(false)
      })
    }if(searchedPosition === "RF"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    rightField: data})
                    setShow(false)
      })
    }if(searchedPosition === "CF"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    centerField: data})
                    setShow(false)
      })
    }if(searchedPosition === "LF"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    leftField: data})
                    setShow(false)
      })
    }if(searchedPosition === "SP"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({...activeRoster,
                    firstStarter: data})
                    setShow(false)
      })
    }
  }
  let leftFieldarray=[]
  let rightFieldarray=[]
  let centerFieldarray=[]
  let thirdBaseArray=[]
  let shortStopArray=[]
  let secondBaseArray=[]
  let firstBaseArray=[]
  let catcherArray=[]
  let startingPitcherArray=[]
  let relieverArray=[]
  let closerArray=[]

  

  const setRandomFirstStarter = () => {
    setRoster({
        firstStarter: starterArr[Math.floor(Math.random() * starterArr.length)]
    })
  }
  const searchFunction = (e) => {
    handleShow()
    setSearch([])
    let posSearch
    let searchStorage =[]
    posSearch = e.target.parentNode.id
    allPlayers.map((player)=> {
      if(player.is_hitter){
        if(player.display_position === e.target.parentNode.id || player.display_secondary_positions === e.target.parentNode.id){
          searchStorage.push(player)
        }
      }else{
        if(player.display_position === e.target.parentNode.id || player.display_secondary_positions === e.target.parentNode.id){
          searchStorage.push(player)
        }
      }
    })
    setSearch(searchStorage)
    
    setSearchPos(posSearch)
  }
  const getAllCards = () => {
    console.log("this function runs")
    fetch("/api/cards")
    .then((res) => 
      res.json()
    ).then((data) => {
      data.map((player) => {
        if(player.is_hitter){
            if(player.display_position == ("LF") || player.display_secondary_positions.includes("LF")){
              leftFieldarray.push(player)
              setLeftFielders(leftFieldarray)
            } 
            if(player.display_position == ("RF") || player.display_secondary_positions.includes("RF")){
              rightFieldarray.push(player)
              setRightFielders(rightFieldarray)
            }
            if(player.display_position ==("CF") || player.display_secondary_positions.includes("CF")){
              centerFieldarray.push(player)
              setCenterFielders(centerFieldarray)
            }
            if(player.display_position == ("3B") || player.display_secondary_positions.includes("3B")){
              thirdBaseArray.push(player)
              setThirdBasemen(thirdBaseArray)
            }
            if(player.display_position == ("SS") || player.display_secondary_positions.includes("SS")){
              shortStopArray.push(player)
              setShortStops(shortStopArray)
            }
            if(player.display_position == ("2B") || player.display_secondary_positions.includes("2B")){
              secondBaseArray.push(player)
              setSecondBasemen(secondBaseArray)
            }
            if(player.display_position == ("1B") || player.display_secondary_positions.includes("1B")){
              firstBaseArray.push(player)
              setFirstBasemen(firstBaseArray)
            }
            if(player.display_position == ("C") || player.display_secondary_positions.includes("C")){
              catcherArray.push(player)
              setCatchers(catcherArray)
            }
        }else{
          if(player.display_position === ("SP") || player.display_secondary_positions.includes("SP")){
            startingPitcherArray.push(player)
            setStarters(startingPitcherArray)
          }
          if(player.display_position === ("RP") || player.display_secondary_positions.includes("RP")){
            relieverArray.push(player)
            setRelievers(relieverArray)
          }
          if(player.display_position === ("CP") || player.display_secondary_positions.includes("CP")){
            closerArray.push(player)
            setClosers(closerArray)
          }
        }
    })
    setPlayers(data)
    })
  }

  const navClick=(event)=> {
    if(event.target.id === "random"){
      setRandomFirstStarter()
      setPage("random")
    }else if (event.target.id === "builder"){
      setRoster({
        firstStarter: undefined
    })
      setPage("builder")
    }
  }
  const pageRender = () => {
    if(allPlayers){
      if(activePage === "random"){
        return(
          <>
            <RandomTeamView leftField={leftFieldArr}
                      centerField={centerFieldArr} 
                      rightField={rightFieldArr} 
                      thirdBase={thirdBaseArr} 
                      shortStop={shortstopArr} 
                      secondBase={secondBaseArr} 
                      firstBase={firstBaseArr} 
                      catchers={catcherArr} 
                      roster={activeRoster} />
            <RandomBullpenView starters={starterArr} relievers={relieverArr} closers={closerArr} roster={activeRoster} />
          </>
        )
      }else if (activePage === "builder"){
        return(
          <TeamPicker pos={searchedPosition} rosterSet={rosterSet} show={show} handleClose={handleClose} handleShow={handleShow} roster={activeRoster} playerSearch={searchedPlayers} searchFunction={searchFunction}/>
        )
        
      }
      
    }
  }
  useEffect(() => {
    getAllCards()
  }, [])

  


  return (
    
    <div className="App">
      <NavbarEl onClick={navClick} />
      {pageRender()}
    </div>
  );
}

export default App;
