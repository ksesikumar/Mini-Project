import EmojiGame from './components/Games/EmojiGame'
import RockPaperScissors from './components/Games/RockPaperScissors'
import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import NewGame from "./components/NewGame";
import PlayAgain from './components/PlayAgain';
var React = require('react')
var ReactDOM = require('react-dom')
var Game = require('./memory_matrix/components/game')

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class App extends Component {
  static initState = () => {
    return {
      newGame: false,
      won: false,
      cards: [],
      clicks : 0
    };
  }

  state = App.initState();

  countClicks = () => {
    this.setState((prevState) => ({
        clicks : prevState.clicks + 1
    }));
  }

  generateDeck = () => {
    let amount = 10;
    let cards = [];
    for (let i = 1; i < amount + 1; i++) {
      let id = createId();
      let id2 = createId();
      let rand = Math.floor(Math.random() * 300) + 1;
      const card1 = {
        id: id,
        matchesId: id2,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      }
      const card2 = {
        id: id2,
        matchesId: id,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      }
      cards.push(card1);
      cards.push(card2);
    }
    this.shuffleCards(cards);
    this.setState({
      cards: cards
    });
  }

  shuffleCards = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  resetGame = () => {
    this.setState(App.initState(), () => {
      this.initGame()
    });
  }

  hasWon = () => {
    this.setState({
      won: true
    });
  };

  initGame = () => {
    this.generateDeck();
    this.setState({
      newGame: true
    });
  };

  render() {
    const { cards, newGame, won, clicks } = this.state;
    return (
      <div>
        <div className="board-container">
          {newGame ?
            (<GameBoard cards={cards} won={this.hasWon} click={this.countClicks} />)
            : null}
            {newGame && (<p className="message center">Total flips: {clicks}</p>)}
        </div>

        <div className="menu">
        <div className="message">
            {won && (<h2>You win!</h2>)}
          </div>
          <NewGame play={this.initGame} />
          {won && (<PlayAgain again={this.resetGame} />)}
        </div>
      </div>
    );
    <EmojiGame emojisList={emojisList} />
    <RockPaperScissors />
  </>
  }
}

var App = React.createClass({
  render: function () {
    return(
      <div className="display">
        <Game />
      </div>
    );
  }
});

export default App;

const createId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}