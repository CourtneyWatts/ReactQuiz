import React from 'react'
import './App.css'
import Intro from './screens/Intro'
import Instructions from './screens/Instructions'
import SelectCategory from './screens/SelectCategory'
import Questions from './screens/Questions'
import Summary from './screens/Summary'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      screen: 'intro',
      currentCount: 1,
      chosenCategory: null,
      usersResults: {}
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
    this.handleFinalAnswerClick = this.handleFinalAnswerClick.bind(this)
    this.handleBackToStartClick = this.handleBackToStartClick.bind(this)
  }

  loadingTimer () {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if (this.state.currentCount < 0) {
      // clearInterval(this.intervalId)
      console.log('now is the time')
      if (this.state.screen === 'intro') {
        this.setState({
          currentCount: 1,
          screen: 'instructions'
        })
      } else if (this.state.screen === 'instructions') {
        this.setState({
          screen: 'select-category',
          currentCount: 0
        })
        clearInterval(this.intervalId)
      }
    }
  }

  handleCategoryClick (i) {
    this.setState({
      screen: 'questions',
      chosenCategory: i
    })
  }

  handleFinalAnswerClick (r) {
    this.setState({
      screen: 'summary',
      usersResults: r
    })
  }

  handleBackToStartClick () {
    this.setState({
      screen: 'select-category',
      usersResults: null
    })
  }

  componentDidMount () {
    console.log('didMount')

    this.intervalId = setInterval(this.loadingTimer.bind(this), 1000)
  }

  render () {
    if (this.state.screen === 'intro') {
      return (
        <div className='canvas' id='intro'>
          <Intro />
        </div>
      )
    } else if (this.state.screen === 'instructions') {
      return (
        <div className='canvas' id='instructions'>
          <Instructions />
        </div>
      )
    } else if (this.state.screen === 'select-category') {
      return (
        <div className='canvas' id='select-category'>
          <SelectCategory onClick={this.handleCategoryClick} />
        </div>
      )
    } else if (this.state.screen === 'questions') {
      return (
        <div className='canvas' id='questions'>
          <Questions category={this.state.chosenCategory} onClick={this.handleFinalAnswerClick} />
        </div>
      )
    } else if (this.state.screen === 'summary') {
      return (
        <div className='canvas' id='summary'>
          <Summary results={this.state.usersResults} onClick={this.handleBackToStartClick} />
        </div>
      )
    }
  }
}

export default Game
