import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBook, faSignOutAlt, faChartArea,faMicrophone, faPhoneAlt, faAngleDoubleLeft, faCommentAlt, faPaperPlane, faGhost, faUser, faRobot } from '@fortawesome/free-solid-svg-icons'
import Nav from './components/Navbar'
import Shell from './components/Shell'
import Help from './components/Help'
import Error from './components/ErrorPage'
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom'

library.add(fab, faBook, faSignOutAlt, faChartArea,faMicrophone, faPhoneAlt, faAngleDoubleLeft, faCommentAlt, faPaperPlane, faGhost, faUser, faRobot)

function App() {
  return (
    <div className="App">
        <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
        <Shell />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
        </Router>
    </div>
  );
}

export default App;
