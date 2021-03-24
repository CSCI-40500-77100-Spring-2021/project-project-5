import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/pages/Home';
import { Login} from './components/pages/auth/Login';
import { Signup } from './components/pages/auth/Signup';
import { Balance } from './components/pages/Balance';
import { BalanceEdit } from './components/pages/Balance-edit'
import { Settings } from './components/pages/Settings';
import { Stats } from './components/exercise/Stats'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Login} />
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/balance' component={Balance} />
          <Route exact path='/balance-edit' component={BalanceEdit} />
          <Route exact path='/stats' component={Stats}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
