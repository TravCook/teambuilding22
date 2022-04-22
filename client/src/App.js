import React, {useState, useEffect} from 'react'
import './App.css';
import NavbarEl from './components/navbar/navbar.js'
import TeamPicker from './components/teamPicker/teamPicker';
import SignupModal from './components/signupModal/signupModal';
import LoginModal from './components/loginModal/loginModal';
import Auth from './utils/auth.js';




function App() {
  const [DDshow, setDDShow ] = useState(false);
  const [teamViewPage, setTVPage] = useState("field")
  const [errorMsg, setErr] = useState()
  const [userTeams, setUserTeams] = useState()
  const [signupFormState, setFormState] = useState({
    formUsername: '',
    formEmail: '',
    formPassword: '',
    formCheckPassword: ''
  });
  const [loginFormState, setLoginState] = useState({
    formEmail: '',
    formPassword: '',
  });
  const [TeamName, setTeamNameState] = useState({
    teamName: ''
  })
  const [searchedPosition, setSearchPos] = useState()
  const [searchFilter, setFilter] = useState({
    Primary: true,
    Secondary: true,
    name: undefined,
    team: undefined,
    series: undefined
  })
  const [show, setShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [searchedPlayers, setSearch] = useState()
  const handleClose = () =>{ setShow(false)};
  const handleShow = () => setShow(true);
  const handleSignupClose = () =>{ setSignupShow(false)};
  const handleSignupShow = () => setSignupShow(true);
  const handleLoginClose = () =>{ setLoginShow(false)};
  const handleLoginShow = () => setLoginShow(true);
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
  const [teams, setTeams] = useState([])
  const handleTVPageChange = (e) => {
    console.log(e.target.id)
    setTVPage(e.target.id)
  }

  const handleSignupChange = (event) => {
    const { id, value } = event.target;

    setFormState({
      ...signupFormState,
      [id]: value,
    });
  };
  const handleLoginChange = (event) => {
    const { id, value } = event.target;

    setFormState({
      ...loginFormState,
      [id]: value,
    });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault()
    if(signupFormState.formPassword === signupFormState.formCheckPassword){
      fetch('/api/user/signup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signupFormState.formEmail,
          username: signupFormState.formUsername,
          password: signupFormState.formPassword
        })
      }).then((res) => {
        return res.json()
      }).then((data) => {
        if(data.token){
          Auth.login(data.token)
          if(data.token){
          handleSignupClose()
        }
        }else{
          setErr(data.msg)
          setFormState({
            formUsername: '',
            formEmail: '',
            formPassword: '',
            formCheckPassword: ''
          })
        }
      })
    }else{
      setErr("Passwords do not match!")
    }
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()
      fetch('/api/user/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signupFormState.formEmail,
          password: signupFormState.formPassword
        })
      }).then((res) => {
        return res.json()
      }).then((data) => {
        if(data.token){
          Auth.login(data.token)
          if(data.token){
          handleLoginClose()
        }
        }else{
          setErr(data.msg)
          setLoginState({
            formEmail: '',
            formPassword: '',
          })
        }
      })
  }

  const rosterClear = (e) => {
    defaultFilter() 
    handleShow()
    setSearch([])
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

  const filterChange = (e) => {
    let filterKey = e.target.id
    console.log(e.target.value)
    if(filterKey === "series"){
      setFilter({
        ...searchFilter,
        series: e.target.text
      })
    }
    else if(filterKey === "name"){
      setFilter({
        ...searchFilter,
        name: e.target.value
      })
      console.log(searchFilter)
    }
     else if(filterKey === "Primary"){
      setFilter({
        ...searchFilter,
        Primary: e.target.checked
      })
    }else if(filterKey === "Secondary"){
      setFilter({
        ...searchFilter,
        Secondary: e.target.checked
      })
    }else{
      if(!teams.includes(filterKey)){
        let searchedTeams = [...teams, filterKey]
        setTeams([...teams, filterKey])
        setFilter({
          ...searchFilter,
          searchTeams: searchedTeams 
        })
      }
      if(teams.includes(filterKey)){
        let filteredTeams = teams.filter((team) => team != filterKey)
        setTeams(filteredTeams)
        setFilter({
          ...searchFilter,
          searchTeams: filteredTeams 
        })
        if(filteredTeams.length === 0){
          setFilter({
            ...searchFilter,
            searchTeams: undefined 
          })
        }
      }
    }
  }
  
  const searchButton =(e) =>{
    e.preventDefault()
    PlayerSearchandSort(searchedPosition)
  }
  const PlayerSearchandSort = (position) => {
    let searchStorage = []
    if(allPlayers){
      allPlayers.map((player)=> {
        let secPos = player.display_secondary_positions.split(", ")
        if(position === "B1" || position === "B2" || position === "B3" || position === "B4" || position === "B5"){
          if(player.is_hitter){
            if(searchFilter.name && searchFilter.searchTeams){
              if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                searchStorage.push(player)
              }
            }
            else if(searchFilter.name && ! searchFilter.searchTeams && ! searchFilter.series){
              if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                searchStorage.push(player)
              }
            }
            else if(searchFilter.searchTeams && ! searchFilter.name && ! searchFilter.series){
              if(searchFilter.searchTeams.includes(player.team)){
                searchStorage.push(player)
              }
            }
            else if(searchFilter.series & ! searchFilter.name && ! searchFilter.searchTeams){

            }
            else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
              searchStorage.push(player)
            }  
          }
        }
        if( position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
          if(!player.is_hitter){
            if(player.display_position === "SP"){
              if(searchFilter.name && searchFilter.searchTeams){
                if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.name && ! searchFilter.searchTeams && ! searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.searchTeams && ! searchFilter.name && ! searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.series & ! searchFilter.name && ! searchFilter.searchTeams){

              }
              else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                searchStorage.push(player)
              }
            }
          }
        }
        if(position==="RP" || position==="RP2" || position==="RP3" || position==="SU" || position ==="CP"){
          if(!player.is_hitter){
            if(player.display_position === "RP" || player.display_position === "CP"){
              if(searchFilter.name && searchFilter.searchTeams){
                if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.name && ! searchFilter.searchTeams && ! searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.searchTeams && ! searchFilter.name && ! searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.series & ! searchFilter.name && ! searchFilter.searchTeams){

              }
              else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                searchStorage.push(player)
              }
            }
          }
        }else{
          if(searchFilter.Primary){
            if(player.display_position === position){
              if(searchFilter.name && searchFilter.searchTeams){
                if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.name && ! searchFilter.searchTeams && ! searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.searchTeams && ! searchFilter.name && ! searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.series & ! searchFilter.name && ! searchFilter.searchTeams){

              }
              else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                searchStorage.push(player)
              }
               
            }
          }
          if(searchFilter.Secondary){
            secPos.map((secondary) => {
              if(secondary === position){
                if(searchFilter.name && searchFilter.searchTeams){
                  if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
                else if(searchFilter.name && ! searchFilter.searchTeams && ! searchFilter.series){
                  if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
                else if(searchFilter.searchTeams && ! searchFilter.name && ! searchFilter.series){
                  if(searchFilter.searchTeams.includes(player.team)){
                    searchStorage.push(player)
                  }
                }
                else if(searchFilter.series & ! searchFilter.name && ! searchFilter.searchTeams){
  
                }
                else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                  searchStorage.push(player)
                }
              }
            })
          }
        }
      })
    searchStorage.sort((a,b) => b.ovr - a.ovr)
    setSearch(searchStorage)
    }
  }
  const searchFunction = (e) => {
    defaultFilter() 
    setSearch([])
    handleShow()
    let posSearch = e.target.parentNode.id
    setSearchPos(posSearch)
    PlayerSearchandSort(posSearch, searchFilter)
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
  useEffect(() => {
    PlayerSearchandSort(searchedPosition, searchFilter)
  }, [searchFilter] )

  const defaultFilter = () => {
    setFilter({
      ...searchFilter,
      Primary: true,
      Secondary: true,
      name: undefined,
    })
  }
  const saveTeam = (e) => {
    e.preventDefault()
    const currentUser = Auth.getProfile()
    const teamtobeSaved = {
      ...activeRoster,
      name: TeamName.teamName,
      owner: currentUser.email
    }
    fetch('/api/team/save', {
      method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(teamtobeSaved)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
    })
  }
  const handleTeamNameChange = (e) => {
    const { id, value } = e.target

    setTeamNameState({
      [id]: value,
    });
  }

  const getUsersTeams = () => {
    if(Auth.loggedIn()){
      const currentUser = Auth.getProfile()
    fetch('/api/team/userTeams', {
      method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({owner: currentUser.email})
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setUserTeams(data)
    })
    }
    
  }

  const teamSelect = (e) => {
    userTeams.map((team) => {
      if(team.name === e.target.id){
        setRoster(
          team
        )
      }
    })
  }
  const teamClear = () => {
    setRoster({
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
  }
  getUsersTeams()
  return (
    <div className="App">
      <NavbarEl playerList={allPlayers} signupShow={handleSignupShow} loginShow={handleLoginShow} />
      <TeamPicker searchFilter={searchFilter} setDDShow={setDDShow}DDshow={DDshow} teamViewPage={teamViewPage} handleTVPageChange={handleTVPageChange} teamClear={teamClear} teamSelect={teamSelect} userTeams={userTeams} handleTeamNameChange={handleTeamNameChange} saveTeam={saveTeam} searchButton={searchButton} filterChange={filterChange} pos={searchedPosition} rosterClear={rosterClear} rosterSet={rosterSet} show={show} handleClose={handleClose} handleShow={handleShow} roster={activeRoster} playerSearch={searchedPlayers} searchFunction={searchFunction}/>
      <SignupModal signupFormState={signupFormState} errMsg={errorMsg} handleSignupSubmit={handleSignupSubmit} handleSignupChange={handleSignupChange} signupShow={signupShow}signupClose={handleSignupClose}/>
      <LoginModal loginFormState={loginFormState}errMsg={errorMsg} handleLoginSubmit={handleLoginSubmit} handleLoginChange={handleLoginChange} loginShow={loginShow} loginClose={handleLoginClose} />
    </div>
  );
}

export default App;
