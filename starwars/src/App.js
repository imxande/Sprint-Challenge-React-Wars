import React from 'react';
import './App.css';
import StarsCard from './components/StarsCard';
import StarsGrid from './components/StarsGrid';
// import axios from "axios"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // const [people, setPeople] = useState([]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

//   useEffect(() => {
//     axios
//         .get("https://henry-mock-swapi.herokuapp.com/api")
//         .then(response => {
//             console.log(response);
//             const allPeople = response.data.results;
//             setPeople(allPeople);
//         })
//         .catch(error =>
//             console.log("Error: ", error)
//         )
// }, []);

return (
  <div className="App">
    <h1 className="Header">React Wars</h1>
    <StarsCard/>
    <StarsGrid/>
  </div>

  )
}


export default App;
