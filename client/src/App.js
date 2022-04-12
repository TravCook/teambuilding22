import React, {useState, useEffect} from 'react'
import './App.css';
import NavbarEl from './components/navbar/navbar.js'
import TeamPicker from './components/teamPicker/teamPicker';




function App() {
  const [searchedPosition, setSearchPos] = useState()
  const [searchFilter, setFilter] = useState({
    Diamond: true,
    Gold: false,
    Silver: false,
    Bronze: false,
    Common: false
  })
  const [show, setShow] = useState(false);
  const [searchedPlayers, setSearch] = useState()
  const handleClose = () =>{ setShow(false)};
  const handleShow = () => setShow(true);
  const [allPlayers, setPlayers] = useState()
  const [activeRoster, setRoster] = useState({
    leftField: undefined,
    centerField: undefined,
    rightField: undefined,
    thirdBase: undefined,
    shortStop: undefined,
    secondBase: undefined,
    firstBase: undefined,
    firstStarter: undefined,
    catcher: undefined,
    starter2: undefined,
    starter3: undefined,
    starter4: undefined,
    starter5: undefined,
    bench1: undefined,
    bench2: undefined,
    bench3: undefined,
    bench4: undefined,
    bench5: undefined,
    reliever1: undefined,
    reliever2: undefined,
    reliever3: undefined,
    setup: undefined,
    closer: undefined
  })
  const rosterClear = (e) => {
    defaultFilter() 
    handleShow()
    setSearch([])
    console.log(e.target.id)
    PlayerSearchandSort(e.target.id)
    setSearchPos(e.target.id)
    defaultFilter()
  }
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
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
        setRoster({
          ...activeRoster,
          firstStarter: data})
          setShow(false)
      })
    }if(searchedPosition === "CP"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          closer: data})
          setShow(false)
      })
    }if(searchedPosition === "B1"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          bench1: data})
          setShow(false)
      })
    }if(searchedPosition === "B2"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          bench2: data})
          setShow(false)
      })
    }if(searchedPosition === "B3"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          bench3: data})
          setShow(false)
      })
    }if(searchedPosition === "B4"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          bench4: data})
          setShow(false)
      })
    }if(searchedPosition === "B5"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          bench5: data})
          setShow(false)
      })
    }if(searchedPosition === "SP2"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          starter2: data})
          setShow(false)
      })
    }if(searchedPosition === "SP3"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          starter3: data})
          setShow(false)
      })
    }if(searchedPosition === "SP4"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          starter4: data})
          setShow(false)
      })
    }if(searchedPosition === "SP5"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          starter5: data})
          setShow(false)
      })
    }if(searchedPosition === "RP"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          reliever1: data})
          setShow(false)
      })
    }
    if(searchedPosition === "RP2"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          reliever2: data})
          setShow(false)
      })
    }if(searchedPosition === "RP3"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          reliever3: data})
          setShow(false)
      })
    }if(searchedPosition === "SU"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.parentNode.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        setRoster({
          ...activeRoster,
          setup: data})
          setShow(false)
      })
    }
  }

  const filterChange = async (e) => {
    let filterKey = e.target.id
    
    if(filterKey === "Diamond"){
      setFilter({
        ...searchFilter,
        Diamond: e.target.checked
      }) 
    }else if(filterKey === "Gold"){
      setFilter({
        ...searchFilter,
        Gold: e.target.checked
      }) 
    }else if(filterKey === "Silver"){
      setFilter({
        ...searchFilter,
        Silver: e.target.checked
      }) 
    }else if(filterKey === "Bronze"){
      setFilter({
        ...searchFilter,
        Bronze: e.target.checked
      })
    }else if(filterKey === "Common"){
      setFilter({
        ...searchFilter,
        Common: e.target.checked
      })
    }
    
     
  }

  const searchButton =(e) =>{
    e.preventDefault()
    PlayerSearchandSort(searchedPosition)
  }
  const PlayerSearchandSort = (position) => {
    let searchStorage = []
    allPlayers.map((player)=> {
      let secPos = player.display_secondary_positions.split(", ")
      if(searchFilter.Diamond){
        if(player.rarity === "Diamond"){
          if(position === "B1" || position === "B2" || position === "B3" || position === "B4" || position === "B5"){
            if(player.is_hitter){
              searchStorage.push(player)
            }
          }if(position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
            if(!player.is_hitter){
              if(player.display_position === "SP"){
                searchStorage.push(player)
              }
            }
          }if(position==="RP" || position==="RP2" || position==="RP3" || position==="SU"){
            if(!player.is_hitter){
              if(player.display_position === "RP" || player.display_position === "CP"){
                searchStorage.push(player)
              }
            }
          }
          if(player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }else if(!player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }
        }
      }if(searchFilter.Gold){
        if(player.rarity === "Gold"){
          if(position === "B1" || position === "B2" || position === "B3" || position === "B4" || position === "B5"){
            if(player.is_hitter){
              searchStorage.push(player)
            }
          }if(position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
            if(!player.is_hitter){
              if(player.display_position === "SP"){
                searchStorage.push(player)
              }
            }
          }if(position==="RP" || position==="RP2" || position==="RP3" || position==="SU"){
            if(!player.is_hitter){
              if(player.display_position === "RP" || player.display_position === "CP"){
                searchStorage.push(player)
              }
            }
          }
          if(player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }else if(!player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }
        }
      }if(searchFilter.Silver){
        if(player.rarity === "Silver"){
          if(position === "B1" || position === "B2" || position === "B3" || position === "B4" || position === "B5"){
            if(player.is_hitter){
              searchStorage.push(player)
            }
          }if(position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
            if(!player.is_hitter){
              if(player.display_position === "SP"){
                searchStorage.push(player)
              }
            }
          }if(position==="RP" || position==="RP2" || position==="RP3" || position==="SU"){
            if(!player.is_hitter){
              if(player.display_position === "RP" || player.display_position === "CP"){
                searchStorage.push(player)
              }
            }
          }
          if(player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }else if(!player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }
        }
      }if(searchFilter.Bronze){
        if(player.rarity === "Bronze"){
          if(position === "B1" || position === "B2" || position === "B3" || position === "B4" || position === "B5"){
            if(player.is_hitter){
              searchStorage.push(player)
            }
          }if(position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
            if(!player.is_hitter){
              if(player.display_position === "SP"){
                searchStorage.push(player)
              }
            }
          }if(position==="RP" || position==="RP2" || position==="RP3" || position==="SU"){
            if(!player.is_hitter){
              if(player.display_position === "RP" || player.display_position === "CP"){
                searchStorage.push(player)
              }
            }
          }
          if(player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }else if(!player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)

              }
            })
          }
        }
      }if(searchFilter.Common){
        if(player.rarity === "Common"){
          if(position === "B1" || position === "B2" || position === "B3" || position === "B4" || position === "B5"){
            if(player.is_hitter){
              searchStorage.push(player)
            }
          }if(position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
            if(!player.is_hitter){
              if(player.display_position === "SP"){
                searchStorage.push(player)
              }
            }
          }if(position==="RP" || position==="RP2" || position==="RP3" || position==="SU"){
            if(!player.is_hitter){
              if(player.display_position === "RP" || player.display_position === "CP"){
                searchStorage.push(player)
              }
            }
          }
          if(player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
              console.log(player.name + " added")
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)
                console.log(player.name + " added")
              }
            })
          }else if(!player.is_hitter){
            if(player.display_position === position){
              searchStorage.push(player)
              console.log(player.name + " added")
            }
            secPos.map((pos) => {
              if(pos === position){
                searchStorage.push(player)
                console.log(player.name + " added")
              }
            })
          }
        }
      }
    })
    searchStorage.sort((a,b) => b.ovr - a.ovr)
    setSearch(searchStorage)
    
  }
  const searchFunction = (e) => {
    handleShow()
    setSearch([])
    let posSearch = e.target.parentNode.id
    console.log(posSearch)
    PlayerSearchandSort(posSearch, searchFilter)
    setSearchPos(posSearch)
  }

  const getAllCards = () => {
    fetch("/api/cards")
    .then((res) => 
      res.json()
    ).then((data) => {
      setPlayers(data)
    })
  }

  useEffect(() => {
    getAllCards()
  }, [])

  const defaultFilter = () => {
    setFilter({
      Diamond: true,
      Gold: false,
      Silver: false,
      Bronze: false,
      Common: false
    })
  }

  return (
    
    <div className="App">
      <NavbarEl playerList={allPlayers} />
      <TeamPicker searchButton={searchButton} filterChange={filterChange} pos={searchedPosition} rosterClear={rosterClear} rosterSet={rosterSet} show={show} handleClose={handleClose} handleShow={handleShow} roster={activeRoster} playerSearch={searchedPlayers} searchFunction={searchFunction}/>
    </div>
  );
}

export default App;
