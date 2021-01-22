
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import Trailer from './components/pages/Trailer';
import PlanTrip from './components/pages/PlanTrip';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/services"  component={Services}/>
     <Route path="/products"  component={Products}/>
     <Route path="/sign-up"  component={SignUp}/>
     <Route path="/trailer"  component={Trailer}/>
     <Route path="/plan-trip"  component={PlanTrip}/>
    </Switch>
    </Router>

    </div>
  );
}

export default App;
