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
      currentCount: 10,
      chosenCategory: null,
      usersResults: {}
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
    this.handleFinalAnswerClick = this.handleFinalAnswerClick.bind(this)
    this.handleBackToStartClick = this.handleBackToStartClick.bind(this)
    this.handleStartGameClick = this.handleStartGameClick.bind(this)
  }

  loadingTimer () {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if (this.state.currentCount < 0) {
      // clearInterval(this.intervalId)
      if (this.state.screen === 'intro') {
        this.setState({
          currentCount: 100,
          screen: 'instructions'
        })
      } else if (this.state.screen === 'instructions') {
        this.setState({
          screen: 'select-category',
          currentCount: 10
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

  handleStartGameClick () {
    this.setState({
      screen: 'select-category',
      currentCount: 10
    })
    clearInterval(this.intervalId)
  }

  componentDidMount () {
    console.log('didMount')
    this.intervalId = setInterval(this.loadingTimer.bind(this), 1000)
  }

  render () {
    if (this.state.screen === 'intro') {
      return (
        <Intro />
      )
    } else if (this.state.screen === 'instructions') {
      return (
        <Instructions onClick={this.handleStartGameClick} />
      )
    } else if (this.state.screen === 'select-category') {
      return (
        <SelectCategory onClick={this.handleCategoryClick} />
      )
    } else if (this.state.screen === 'questions') {
      return (
        <Questions category={this.state.chosenCategory} onClick={this.handleFinalAnswerClick} />
      )
    } else if (this.state.screen === 'summary') {
      return (
        <Summary category={this.state.chosenCategory} results={this.state.usersResults} onClick={this.handleBackToStartClick} />
      )
    }
  }
}

export default Game
