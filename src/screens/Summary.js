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
        <div className='quick-summary d-flex justify-content-center'>
          <h1>{oneWord}</h1>
        </div>
        <div className='summary-section'>
          <div className='results-box d-flex justify-content-between'>
            <span className='field'>Correct:</span><span className='value'>{this.props.results.correctTotal}</span>
          </div>
          <div className='results-box d-flex justify-content-between'>
            <span className='field'>Streak Bonus:</span><span className='value'>{this.props.results.correctStreak}</span>
          </div>
          <div className='results-box d-flex justify-content-between'>
            <span className='field'>Lifes Used:</span><span className='value'>All</span>
          </div>
          <div className='mt-5 talent-like'>
            <p className='description text-center'>If your xxx talent was a reflection of your xxx knowledge you would be...</p>
            <img className='reflection-image' src={personImage} />
            <div className='d-flex'><p className='reflection-name text-center'>{person}</p></div>
          </div>
          <p>ranking: {ranking}</p>
        </div>

        <p>status: {status}</p>
        <p>ranking: {ranking}</p>
        <div onClick={this.props.onClick}> Back to Start </div>
      </div>
    )
  }
}

export default Summary
