import {Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
    <Route path="/" component={Home} />
    <Route path="/team-matches/id" />
    <Route component={NotFound} />
)

export default App
