import React from 'react'
import quizDatabase from '../questionDatabase'
import { ReactComponent as BackArrow } from '../images/icons/backArrow.svg'
import Stars from '../components/Stars.js'
import { Animated } from 'react-animated-css'

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

    // calculating lifesRemaining
    const lifes = this.props.results.lifesRemaining
    const lifesRemaining = (lifes) => {
      lifes = this.props.results.lifesRemaining / 2
      if (lifes !== 3) return lifes
      return 'All'
    }
    // calculating timeBonus
    const timeBanked = this.props.results.timeBanked
    const timeBonus = (timeBanked) => {
      if (timeBanked >= 200) {
        return 'Super Quick'
      } else if (timeBanked >= 150) {
        return 'Quick'
      } else {
        return ' - '
      }
    }

    return (
      <div className='canvas' id='summary'>
        <Animated>
          <div>
            <div className='quick-summary d-flex justify-content-center'>
              <h1>{oneWord}</h1>
            </div>
            <div className='summary-section'>
              <div className='results-box d-flex justify-content-between'>
                <span className='field'>Correct:</span><span className='value'>{this.props.results.correctTotal}</span>
              </div>
              <div className='mt-3 talent-like'>
                <p className='description text-center'>If your {topic1} talent was a reflection of your {topic2} knowledge, you would be...</p>
                <img className='reflection-image' src={personImage} />
                <div className='d-flex'><p className='reflection-name text-center'>{person}</p></div>
              </div>
              <div className='results-box d-flex justify-content-between'>
                <span className='field title'>Ranking</span>
              </div>
              <div className='mt results-box d-flex justify-content-between'>
                <span className='field'>Lifes Remaining:</span><span className='value'>{lifesRemaining(lifes)}</span>
              </div>
              <div className='results-box d-flex justify-content-between'>
                <span className='field'>Correct Streak:</span><span className='value'>{this.props.results.longestCorrectStreak}</span>
              </div>
              <div className='results-box d-flex justify-content-between'>
                <span className='field'>Speed:</span><span className='value'>{timeBonus(timeBanked)}</span>
              </div>
            </div>
            <Stars rating={this.props.results.ranking} />
            <div className='back-button ml-4'>
              <div onClick={this.props.onClick} className='back-arrow'><BackArrow /></div>
            </div>
          </div>
        </Animated>
      </div>
    )
  }
}

export default Summary
