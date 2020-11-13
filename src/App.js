import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import AboutContainer from "./components/AboutContainer/AboutContainer";
// import portfolio from "./pages/portfolio";


function App() {
  return (
    <>
      <Router>
        <Switch>
         <AboutContainer />
        </Switch>
      </Router>
    </>
  );
}

export default App;
