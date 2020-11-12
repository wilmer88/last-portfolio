import AboutContainer from "./container/AboutContainer/AboutContainer"
 import Portfolio from "./container/Portfolio/Portfolio.jsx"
 import{useEffect} from "react";

 function App() {
   
  return (
    // useEffect(() => {
    //   console.log("make an API call")
    // }, []),
    <div className="App">
     <AboutContainer/>
     <Portfolio />
    </div>
  );
}

export default App;



