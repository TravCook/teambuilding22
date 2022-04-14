
export function getAllCards(){
    fetch("/api/cards")
    .then((res) => 
      res.json()
    ).then((data) => {
      return data
    })
  }

