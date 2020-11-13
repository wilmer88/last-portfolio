
import Projects from "./components/AboutContainer/Projects"
import AboutContainer from "./components/AboutContainer/AboutContainer";
// import portfolio from "./pages/portfolio";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <>
   <Router>
 <Switch>
 <Route  path="/portfolio" component={Projects}/>
 <Route  path="/" component={AboutContainer}/>

 </Switch>
    </Router>
  
   </>
  );
}

export default App;


