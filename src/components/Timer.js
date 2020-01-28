import React from 'react'

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  questionTimer () {
    console.log(this.props.timeBonus)
    this.setState({ timeLeft: this.state.timeLeft - 1 })
    if (this.state.timeLeft === 0) {
      clearInterval(this.intervalId)
      this.props.outOfTime()
    }
  }

  componentWillReceiveProps (newProps) {
    console.log('test')
    if (newProps.stopCounter === false) {
      console.log('stopCounterfalse')
      if (newProps.timeBonus) {
        this.setState({ timeLeft: this.state.timeLeft + 30 })
      } else {
        this.setState({ timeLeft: this.props.timeLeft })
      }
    }
  }

  componentDidUpdate () {
    console.log('component will update')
    if (this.props.stopCounter === true) {
      const verdictDisplay = document.getElementById('timer')
      const verdictDisplayDiv = document.getElementById('timer-div')
      if (this.props.verdict === 'correct') {
        verdictDisplay.innerHTML = 'CORRECT'
        verdictDisplayDiv.className += ' correct'
      } else if (this.props.verdict === 'incorrect') {
        verdictDisplay.innerHTML = 'INCORRECT'
        verdictDisplayDiv.className += ' incorrect'
      } else if (this.props.verdict === 'outoftime') {
        verdictDisplay.innerHTML = 'Out of Time'
        verdictDisplayDiv.className += ' out-of-time'
      }
      // where i want to put all of my success code in

      clearInterval(this.intervalId)
      console.log('bingo')
    } else {
      clearInterval(this.intervalId)
      this.intervalId = setInterval(this.questionTimer.bind(this), 1000)
    }
  }

  componentDidMount () {
    console.log('didMount')
    this.setState({ timeLeft: this.props.timeLeft })
    this.intervalId = setInterval(this.questionTimer.bind(this), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div id='timer-div' className='timer d-flex align-items-center justify-content-center'>
        <span id='timer'>{this.state.timeLeft}</span>
      </div>
    )
  }
}

export default Timer
