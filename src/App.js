import './App.css'

import {Switch, Route} from 'react-router-dom'

import GamigHomeScreen from './components/GamingHomeScreen'
import RPSgameHomePage from './components/RPSgameHomePage'
import RPSgame from './components/RPSgame'
import EmojiRules from './components/EmojiRules'
import EmojiGame from './components/EmojiGame'
import EmojiGameResult from './components/EmojiGameResultView'
import CardFlipHomePage from './components/CardFlipHomePage'
import CardFlipGame from './components/CardFlipGame'
import MemoryMatrixHome from './components/MemoryMatrixHome'
import MemoryGameBoard from './components/MemoryMatrixGameBoard'

const App = () => (
  <Switch>
    <Route exact path="/" component={GamigHomeScreen} />
    <Route exact path="/rpsGame" component={RPSgameHomePage} />
    <Route exact path="/playRpsgame" component={RPSgame} />
    <Route exact path="/emojiGame" component={EmojiRules} />
    <Route exact path="/playEmojiGame" component={EmojiGame} />
    <Route exact path="/emojiResult" component={EmojiGameResult} />
    <Route exact path="/cardFlipGame" component={CardFlipHomePage} />
    <Route exact path="/playCardflipGame" component={CardFlipGame} />
    <Route exact path="/memoryMatrixGame" component={MemoryMatrixHome} />
    <Route exact path="/playMemoryMatrixgame" component={MemoryGameBoard} />
  </Switch>
)

export default App
