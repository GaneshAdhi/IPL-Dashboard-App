import './App.css'
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/Home'
import TeamMatchComponent from './components/TeamMatches'
import NotFoundPage from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/team-matches/:id" component={TeamMatchComponent} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default App
