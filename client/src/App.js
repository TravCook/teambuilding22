import logo from './logo.svg';
import './App.css';

const getAllCards = () => {
  fetch("/api/cards")
  .then((res) => 
    // console.log(response)
    res.json()
  ).then((data) => {
    console.log(data)
  })
}

getAllCards()

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
