import React from 'react'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCount: null
    }
  }

  render () {
    return (
      <div>
        <p>{this.props.results.numberOfQuestions}</p>
        <p>{this.props.results.correctStreak}</p>
        <p>{this.props.results.correctTotal}</p>
        <p>summary yo!</p>
        <div onClick={this.props.onClick}> Back to Start </div>
      </div>
    )
  }
}

export default Summary
