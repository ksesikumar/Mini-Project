import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdArrowBack} from 'react-icons/io'

import './index.css'

import MemoryMatrixRulesPopup from '../MemoryMatrixRulesPopup'
import MemoryMatrixProgressBar from '../MemoryMatrixResultsPage'

const oneLevelArray = ['', '', '']
class MemoryGameBoard extends Component {
  state = {
    level: 1,
    highlightedCells: [{}],
    gridSize: 3,
    levelArray: oneLevelArray,
    clickedCells: [{}],
    showResults: false,
  }

  componentDidMount() {
    this.generateGrid()
  }

  onClickPlayAgain = () => {
    this.setState({
      showResults: false,
    })
  }

  generateGrid = () => {
    const {gridSize} = this.state
    const newHighlightedCells = []
    // eslint-disable-next-line
    for (let i = 0; i < gridSize; i = i + 1) {
      const randomRow = Math.floor(Math.random() * gridSize)
      const randomCol = Math.floor(Math.random() * gridSize)
      newHighlightedCells.push({row: randomRow, col: randomCol})
    }
    this.setState({highlightedCells: newHighlightedCells})
    setTimeout(() => {
      this.setState({highlightedCells: [{}]})
    }, 5000) // Adjust time here (5 seconds)
  }

  nextLevel = () => {
    this.setState(prevState => ({
      level: prevState.level + 1,
      levelArray: [...prevState.levelArray, ''],
      gridSize: prevState.gridSize + 1,
    }))
    this.componentDidMount()
  }

  currentLevel = () => {
    this.setState({
      level: 1,
      levelArray: oneLevelArray,
      gridSize: 3,
    })
    this.componentDidMount()
  }

  evaluate = (clickedCells, highlightedCells) =>
    highlightedCells.every(cell => clickedCells.includes(cell))

  handleCellClick = (row, col) => {
    const {highlightedCells, clickedCells} = this.state
    const {gridSize, level} = this.state
    const clickedCell = {row, col}
    this.setState({
      clickedCells: [...clickedCells, clickedCell],
    })

    if (clickedCells.length === gridSize) {
      // All cells clicked correctly
      if (level === 15) {
        // Last level reached
        this.setState({showResults: true})
      } else {
        // Move to the next level
        this.nextLevel()
        console.log('nextLevel')
      }
    } else if (this.evaluate(clickedCells, highlightedCells)) {
      this.nextLevel()
    } else {
      this.currentLevel()
    }
  }

  render() {
    const {levelArray, highlightedCells, clickedCells} = this.state
    const {level, showResults} = this.state

    return showResults ? (
      <MemoryMatrixProgressBar
        level={level}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    ) : (
      <div className="memory-matrix-bg">
        <div className="buttons-container">
          <Link to="/">
            <button className="back-btn" type="button">
              <IoMdArrowBack color="#ffffff" />
              <p>Back</p>
            </button>
          </Link>
          <MemoryMatrixRulesPopup />
        </div>
        <h1 className="memory-matrix-heading">Memory Matrix</h1>
        <p className="level-heading">Level: {level}</p>
        <table className="grid">
          {levelArray.map((eachRow, rowIndex) => (
            <tr>
              {levelArray.map((each, colIndex) => (
                <td
                  className={`cell ${
                    highlightedCells.some(
                      cell => cell.row === rowIndex && cell.col === colIndex,
                    )
                      ? 'highlighted'
                      : ''
                  }${
                    clickedCells.some(
                      cell => cell.row === rowIndex && cell.col === colIndex,
                    )
                      ? 'clicked'
                      : ''
                  }`}
                  onClick={() => this.handleCellClick(rowIndex, colIndex)}
                >
                  {}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default MemoryGameBoard
