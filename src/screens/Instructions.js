import React from 'react'
import { ReactComponent as MoreTime } from '../images/icons/moreTime.svg'
import { ReactComponent as Clue } from '../images/icons/clue.svg'
import { ReactComponent as Fifty } from '../images/icons/fifty.svg'

class Instructions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCount: 10,
      screen: 'x'
    }
  }

  render () {
    return (
      <div className='instuctionsList p-5'>
        <h2 className='Title mb-4'>How To Play</h2>
        <p>After choosing from 1 of 3 categories - <span className='important-text'>Film, Music</span> or <span className='important-text'>Sports</span></p>
        <p>Its you versus the clock. 10 questions with 30 seconds to answer each Question</p>
        <p className='important-text mb-5'>Where will you rank?</p>
        <div className='life-tokens-section'>
          <p className='important-text life-tokens'>Life Tokens</p>
          <p>Finding some of the questions tough, why not use a Life token</p>
          <div className='d-flex align-items-center'>
            <p className='life'><MoreTime /></p><p>&nbsp;- will gift you more time to answer the question.</p>
          </div>
          <div className='d-flex align-items-center'>
            <p className='life'><Fifty /></p><p>&nbsp;- will remove 2 incorrect answers.</p>
          </div>
          <div className='d-flex align-items-center'>
            <p className='life'><Clue /></p><p>&nbsp;- will give you a clue.</p>
          </div>
          <p>Use them wisely, you only get one of each type - on a play through.</p>
        </div>
        <div className='mt-5 d-flex justify-content-center'>
          <div onClick={() => this.props.onClick()} className='ready-to-play-button text-center'>Ready to play</div>
        </div>
      </div>
    )
  }
}

export default Instructions
