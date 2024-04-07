import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {IoMdArrowBack} from 'react-icons/io'

import CardFlipRulesPopup from '../CardFlipRulesPopup'
import FootprintCard from '../CardFlipFootprintCard'

import './index.css'

const cardsData = [
  {
    id: uuidv4(),
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: uuidv4(),
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: uuidv4(),
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: uuidv4(),
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: uuidv4(),
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: uuidv4(),
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: uuidv4(),
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: uuidv4(),
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: uuidv4(),
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: uuidv4(),
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: uuidv4(),
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: uuidv4(),
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: uuidv4(),
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: uuidv4(),
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: uuidv4(),
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: uuidv4(),
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: uuidv4(),
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: uuidv4(),
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: uuidv4(),
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: uuidv4(),
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class CardFlipPlayPage extends Component {
  state = {
    score: 1,
    timer: 120,
    openCards: [],
    clearedCards: {},
    moves: 0,
    lowestCardsCount: 0,
    showModal: false,
    isGameover: true,
    cardsList: cardsData,
    cardClicked: false,
  }

  onClickCard = () => {
    this.setState({
      cardClicked: true,
    })
  }

  renderPlayView = () => {
    const {score, timer, cardsCount} = this.state
    const {lowestCardsCount, cardsList, cardClicked} = this.state

    return (
      <div className="cardflip-play-bg">
        <div className="buttons-container">
          <Link to="/">
            <button className="cardflip-back-btn" type="button">
              <IoMdArrowBack color="#ffffff" />
              <p>back</p>
            </button>
          </Link>
          <CardFlipRulesPopup />
        </div>
        <h1 className="cardflip-game-heading">Card-Flip Memory Game</h1>
        <p className="timer">{timer}</p>
        <div className="cardflips-score-container">
          <p className="sub-headings">Card Flip Count: {cardsCount}</p>
          <p className="sub-headings">Lowest Flip Count: {lowestCardsCount}</p>
          <p className="sub-headings">Score: {score}</p>
        </div>
        <div className="cards-container-bg">
          <ul className="footprint-cards-list">
            {cardsList.map(each => (
              <FootprintCard
                key={each.id}
                item={each}
                onClickCard={this.onClickCard}
                cardClicked={cardClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isGameover, score, cardsCount} = this.state
    return isGameover
      ? this.renderPlayView()
      //<CardflipResultView score={score} cardsCount={cardsCount} />
       null
  }
}

export default CardFlipPlayPage
