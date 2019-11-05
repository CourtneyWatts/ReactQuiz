import React from 'react'

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  questionTimer () {
    this.setState({ timeLeft: this.state.timeLeft - 1 })
    if (this.state.timeLeft === 0) {
      clearInterval(this.intervalId)
      this.props.outOfTime()
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.stopCounter === false) {
      console.log('stopCounterfalse')
      this.setState({ timeLeft: this.props.timeLeft })
    }
  }

  componentDidUpdate () {
    console.log('component will update')
    if (this.props.stopCounter === true) {
      var verdictDisplay = document.getElementById('timer')
      if (this.props.verdict === 'correct' ) {
        verdictDisplay.innerHTML = 'CORRECT'
      } else if (this.props.verdict === 'incorrect') {
        verdictDisplay.innerHTML = 'INCORRECT'
      } else if (this.props.verdict === 'outoftime') {
        verdictDisplay.innerHTML = 'Out of Time'
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
      <div className='timer d-flex align-items-center justify-content-center'>
        <span id='timer'>{this.state.timeLeft}</span>
      </div>
    )
  }
}

export default Timer
