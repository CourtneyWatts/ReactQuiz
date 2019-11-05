import React from 'react'
import quizDatabase from '../questionDatabase'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCount: null
    }
  }

  render () {
    const accolades = quizDatabase[this.props.category].accolades[this.props.results.correctTotal]
    const oneWord = accolades[0]
    const status = accolades[1]
    const person = accolades[2]
    const personImage = accolades[3]
    const ranking = this.props.results.ranking

    return (
      <div>
        <p>Number of Questions: {this.props.results.numberOfQuestions}</p>
        <p>Correct streak: {this.props.results.correctStreak}</p>
        <p>Total Correct: {this.props.results.correctTotal}</p>
        <p>one word: {oneWord}</p>
        <p>status: {status}</p>
        <p>person: {person}</p>
        <p>personImage: {personImage}</p>
        <p>ranking: {ranking}</p>

        <p>summary yo!</p>
        <div onClick={this.props.onClick}> Back to Start </div>
      </div>
    )
  }
}

export default Summary
