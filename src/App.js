import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import AboutContainer from "./components/AboutContainer/AboutContainer";
import Navbar from "./components/Navbar/index"
// import portfolio from "./pages/portfolio";
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Navbar /> */}
         <AboutContainer />
        <Projects />
      
        </Switch>
      </Router>
    </>
  );
}

export default App;
