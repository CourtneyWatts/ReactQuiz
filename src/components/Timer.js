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

  componentWillReceiveProps () {
    this.setState({ timeLeft: this.props.timeLeft })
  }

  componentDidUpdate () {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.questionTimer.bind(this), 1000)
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
        <span>{this.state.timeLeft}</span>
      </div>
    )
  }
}

export default Timer
