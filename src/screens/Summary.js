import React from 'react'
import quizDatabase from '../questionDatabase'
import { ReactComponent as BackArrow } from '../images/icons/backArrow.svg'

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
    // const status = accolades[1]
    const person = accolades[2]
    const personImage = accolades[3]
    // const ranking = this.props.results.ranking
    let topic1
    let topic2
    if (this.props.category === 'films') {
      topic1 = topic2 = 'film'
    } else if (this.props.category === 'music') {
      topic1 = 'musical'
      topic2 = 'music'
    } else if (this.props.category === 'sports') {
      topic1 = 'sporting'
      topic2 = 'sports'
    }

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
            <span className='field'>Longest Streak:</span><span className='value'>{this.props.results.longestCorrectStreak}</span>
          </div>
          <div className='results-box d-flex justify-content-between'>
            <span className='field'>Lifes Used:</span><span className='value'>All</span>
          </div>
          <div className='mt-5 talent-like'>
            <p className='description text-center'>If your {topic1} talent was a reflection of your {topic2} knowledge, you would be...</p>
            <img className='reflection-image' src={personImage} />
            <div className='d-flex'><p className='reflection-name text-center'>{person}</p></div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <h1 class='banner'>A Simple CSS Banner</h1>
        </div>
        <div className='mt-5 d-flex justify-content-center'>
          <span class='fa fa-star checked' />
          <span class='fa fa-star checked' />
          <span class='fa fa-star checked' />
          <span class='fa fa-star' />
          <span class='fa fa-star' />
        </div>
        <div className='mt-5 ml-4'>
          <div onClick={this.props.onClick} className='back-arrow'><BackArrow /></div>
        </div>

      </div>
    )
  }
}

export default Summary
