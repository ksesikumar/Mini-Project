import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'
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

function CardFlipGame() {
  const [cardsArray, setCardsArray] = React.useState([])
  const [moves, setMoves] = React.useState(0)
  const [firstCard, setFirstCard] = React.useState(null)
  const [secondCard, setSecondCard] = React.useState(null)
  const [stopFlip, setStopFlip] = React.useState(false)
  const [won, setWon] = React.useState(0)

  // this function start new Game

  function NewGame() {
    setTimeout(() => {
      const randomOrderArray = cardsData.sort(() => 0.5 - Math.random())
      setCardsArray(randomOrderArray)
      setMoves(0)
      setFirstCard(null)
      setSecondCard(null)
      setWon(0)
    }, 1200)
  }

  // this function helps in storing the firstCard and secondCard value

  function handleSelectedCards(item) {
    console.log(typeof item)
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item)
    } else {
      setFirstCard(item)
    }
  }

  // after the slected images have been checked for
  // equivalency we empty the firstCard and secondCard component

  function removeSelection() {
    setFirstCard(null)
    setSecondCard(null)
    setStopFlip(false)
    setMoves(prevValue => prevValue + 1)
  }

  // if two have been selected then we check if the images are same or not,
  // if they are same then we stop the flipping ability
  // else we turn them back

  React.useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true)
      if (firstCard.name === secondCard.name) {
        setCardsArray(prevArray => {
          prevArray.map(unit => {
            if (unit.name === firstCard.name) {
              return {...unit}
            }
            return unit
          })
        })
        setWon(preVal => preVal + 1)
        removeSelection()
      } else {
        setTimeout(() => {
          removeSelection()
        }, 1000)
      }
    }
  }, [firstCard, secondCard])

  // starts the game for the first time.

  React.useEffect(() => {
    NewGame()
  }, [])

  return (
    <>
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
        <p className="timer">120</p>
        <div className="cardflips-score-container">
          <p className="sub-headings">Card Flip Count: {moves}</p>
          <p className="sub-headings">Lowest Flip Count: {moves}</p>
          <p className="sub-headings">Score: {won}</p>
        </div>
        <div className="cards-container-bg">
          <ul className="footprint-cards-list">
            {cardsArray.map(item => (
              <FootprintCard
                item={item}
                key={item.id}
                handleSelectedCards={handleSelectedCards}
                toggled={item === firstCard || item === secondCard}
                stopflip={stopFlip}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CardFlipGame
