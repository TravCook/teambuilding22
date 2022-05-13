import React, {useState, useEffect} from 'react'
import './App.css';
import {Modal} from 'react-bootstrap'
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
  const [allSeries, setSeries] = useState()
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
  const [errorShow, setErrShow] = useState(false)
  const [teams, setTeams] = useState([])
  const handleTVPageChange = (e) => {
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
    if(e.target.id === "C"){
      setRoster({
        ...activeRoster,
        catcher: undefined
      })
    }
    if(e.target.id === "1B"){
      setRoster({
        ...activeRoster,
        firstBase: undefined
      })
    }if(e.target.id === "2B"){
      setRoster({
        ...activeRoster,
        secondBase: undefined
      })
    }if(e.target.id === "SS"){
      setRoster({
        ...activeRoster,
        shortStop: undefined
      })
    }if(e.target.id === "3B"){
      setRoster({
        ...activeRoster,
        thirdBase: undefined
      })
    }if(e.target.id === "RF"){
      setRoster({
        ...activeRoster,
        rightField: undefined
      })
    }if(e.target.id === "CF"){
      setRoster({
        ...activeRoster,
        centerField: undefined
      })
    }if(e.target.id === "LF"){
      setRoster({
        ...activeRoster,
        leftField: undefined
      })
    }if(e.target.id === "SP"){
      setRoster({
        ...activeRoster,
        firstStarter: undefined
      })
    }if(e.target.id === "CP"){
      setRoster({
        ...activeRoster,
        closer: undefined
      })
    }if(e.target.id === "B1"){
      setRoster({
        ...activeRoster,
        bench1: undefined
      })
    }if(e.target.id === "B2"){
      setRoster({
        ...activeRoster,
        bench2: undefined
      })
    }if(e.target.id === "B3"){
      setRoster({
        ...activeRoster,
        bench3: undefined
      })
    }if(e.target.id === "B4"){
      setRoster({
        ...activeRoster,
        bench4: undefined
      })
    }if(e.target.id === "B5"){
      setRoster({
        ...activeRoster,
        bench5: undefined
      })
    }if(e.target.id === "SP2"){
      setRoster({
        ...activeRoster,
        starter2: undefined
      })
    }if(e.target.id === "SP3"){
      setRoster({
        ...activeRoster,
        starter3: undefined
      })
    }if(e.target.id === "SP4"){
      setRoster({
        ...activeRoster,
        starter4: undefined
      })
    }if(e.target.id === "SP5"){
      setRoster({
        ...activeRoster,
        starter5: undefined
      })
    }if(e.target.id === "RP"){
      setRoster({
        ...activeRoster,
        reliever1: undefined
      })
    }if(e.target.id === "RP2"){
      setRoster({
        ...activeRoster,
        reliever2: undefined
      })
    }if(e.target.id === "RP3"){
      setRoster({
        ...activeRoster,
        reliever3: undefined
      })
    }if(e.target.id === "SU"){
      setRoster({
        ...activeRoster,
        setup: undefined
      })
    }
  }
  const rosterSet = (e) => {
    if(searchedPosition === "C"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            catcher: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
        })
    }
    if(searchedPosition === "1B"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            firstBase: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "2B"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            secondBase: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SS"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            shortStop: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "3B"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            thirdBase: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "RF"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            rightField: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "CF"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            centerField: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "LF"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            leftField: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SP"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            firstStarter: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "CP"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            closer: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "B1"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            bench1: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "B2"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            bench2: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "B3"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            bench3: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "B4"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            bench4: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "B5"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            bench5: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SP2"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            starter2: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SP3"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            starter3: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SP4"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            starter4: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SP5"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            starter5: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "RP"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            reliever1: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }
    if(searchedPosition === "RP2"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            reliever2: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "RP3"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            reliever3: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }if(searchedPosition === "SU"){
      fetch("/api/cards", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({uuid: e.target.id})}
      ).then((res) => 
        res.json()
      ).then((data) => {
        const exists = Object.keys(activeRoster).some((test) => {
          if(activeRoster[test]){
            return activeRoster[test].name === data.name
          }
        })
        if(!exists){
          setRoster({
            ...activeRoster,
            setup: data
          })
          setShow(false)
        }else{
          window.alert("Player Already in Use")
        }
      })
    }
  }

  const filterChange = (e) => {
    let filterKey = e.target.id
    if(e.target.parentNode.id === "series"){
      if(e.target.text === "All"){
        setFilter({
          ...searchFilter,
          series: undefined
        })
      }else{
        setFilter({
          ...searchFilter,
          series: e.target.text
        })
      }
      
    }
    else if(filterKey === "name"){
      setFilter({
        ...searchFilter,
        name: e.target.value
      })
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
            if(searchFilter.name && searchFilter.searchTeams && !searchFilter.series){
              if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                searchStorage.push(player)
              }
            }
            else if(searchFilter.name && searchFilter.searchTeams && searchFilter.series){
              if(player.series === searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
              }
            }
            else if(searchFilter.name && searchFilter.series && !searchFilter.searchTeams){
              if(player.series === searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
            }
            else if(searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
              if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                searchStorage.push(player)
              }
            }
            else if(searchFilter.searchTeams && !searchFilter.name && !searchFilter.series){
              if(searchFilter.searchTeams.includes(player.team)){
                searchStorage.push(player)
              }
            }
            else if(searchFilter.series && !searchFilter.name && !searchFilter.searchTeams){
              if(player.series === searchFilter.series){
                searchStorage.push(player)
              }
            }
            else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
              searchStorage.push(player)
            } 
          }
        }
        if( position==="SP2" || position==="SP3" || position==="SP4" || position==="SP5"){
          if(!player.is_hitter){
            if(player.display_position === "SP"){
              if(searchFilter.name && searchFilter.searchTeams && !searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.name && searchFilter.searchTeams && searchFilter.series){
                if(player.series === searchFilter.series){
                  if(searchFilter.searchTeams.includes(player.team)){
                    if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                      searchStorage.push(player)
                    }
                  }
                }
              }
              else if(searchFilter.name && searchFilter.series && !searchFilter.searchTeams){
                if(player.series === searchFilter.series){
                  if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
              }
              else if(searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.searchTeams && !searchFilter.name && !searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.series && !searchFilter.name && !searchFilter.searchTeams){
                if(player.series === searchFilter.series){
                  searchStorage.push(player)
                }
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
              if(searchFilter.name && searchFilter.searchTeams && !searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.name && searchFilter.searchTeams && searchFilter.series){
                if(player.series === searchFilter.series){
                  if(searchFilter.searchTeams.includes(player.team)){
                    if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                      searchStorage.push(player)
                    }
                  }
                }
              }
              else if(searchFilter.name && searchFilter.series && !searchFilter.searchTeams){
                if(player.series === searchFilter.series){
                  if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
              }
              else if(searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.searchTeams && !searchFilter.name && !searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.series && !searchFilter.name && !searchFilter.searchTeams){
                if(player.series === searchFilter.series){
                  searchStorage.push(player)
                }
              }
              else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                searchStorage.push(player)
              }
            }
          }
        }else{
          if(searchFilter.Primary){
            if(player.display_position === position){
              if(searchFilter.name && searchFilter.searchTeams && !searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.name && searchFilter.searchTeams && searchFilter.series){
                if(player.series === searchFilter.series){
                  if(searchFilter.searchTeams.includes(player.team)){
                    if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                      searchStorage.push(player)
                    }
                  }
                }
              }
              else if(searchFilter.name && searchFilter.series && !searchFilter.searchTeams){
                if(player.series === searchFilter.series){
                  if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
              }
              else if(searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.searchTeams && !searchFilter.name && !searchFilter.series){
                if(searchFilter.searchTeams.includes(player.team)){
                  searchStorage.push(player)
                }
              }
              else if(searchFilter.series && !searchFilter.name && !searchFilter.searchTeams){
                if(player.series === searchFilter.series){
                  searchStorage.push(player)
                }
              }
              else if(!searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                searchStorage.push(player)
              }
               
            }
          }
          if(searchFilter.Secondary){
            secPos.map((secondary) => {
              if(secondary === position){
                if(searchFilter.name && searchFilter.searchTeams && !searchFilter.series){
                  if(searchFilter.searchTeams.includes(player.team) && player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
                else if(searchFilter.name && searchFilter.searchTeams && searchFilter.series){
                  if(player.series === searchFilter.series){
                    if(searchFilter.searchTeams.includes(player.team)){
                      if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                        searchStorage.push(player)
                      }
                    }
                  }
                }
                else if(searchFilter.name && searchFilter.series && !searchFilter.searchTeams){
                  if(player.series === searchFilter.series){
                    if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                      searchStorage.push(player)
                    }
                  }
                }
                else if(searchFilter.name && !searchFilter.searchTeams && !searchFilter.series){
                  if(player.name.toLowerCase().includes(searchFilter.name.toLowerCase())){
                    searchStorage.push(player)
                  }
                }
                else if(searchFilter.searchTeams && !searchFilter.name && !searchFilter.series){
                  if(searchFilter.searchTeams.includes(player.team)){
                    searchStorage.push(player)
                  }
                }
                else if(searchFilter.series && !searchFilter.name && !searchFilter.searchTeams){
                  if(player.series === searchFilter.series){
                    searchStorage.push(player)
                  }
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
  const getAllSeries = () => {
    fetch('/api/series')
    .then((res) =>
      res.json() 
    ).then((data) => {
      setSeries(data)
    })
  }

  useEffect(() => {
    getAllCards()
    getAllSeries()
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
      <TeamPicker allSeries={allSeries} searchFilter={searchFilter} setDDShow={setDDShow}DDshow={DDshow} teamViewPage={teamViewPage} handleTVPageChange={handleTVPageChange} teamClear={teamClear} teamSelect={teamSelect} userTeams={userTeams} handleTeamNameChange={handleTeamNameChange} saveTeam={saveTeam} searchButton={searchButton} filterChange={filterChange} pos={searchedPosition} rosterClear={rosterClear} rosterSet={rosterSet} show={show} handleClose={handleClose} handleShow={handleShow} roster={activeRoster} playerSearch={searchedPlayers} searchFunction={searchFunction}/>
      <SignupModal signupFormState={signupFormState} errMsg={errorMsg} handleSignupSubmit={handleSignupSubmit} handleSignupChange={handleSignupChange} signupShow={signupShow}signupClose={handleSignupClose}/>
      <LoginModal loginFormState={loginFormState}errMsg={errorMsg} handleLoginSubmit={handleLoginSubmit} handleLoginChange={handleLoginChange} loginShow={loginShow} loginClose={handleLoginClose} />
    </div>
  );
}

export default App;
