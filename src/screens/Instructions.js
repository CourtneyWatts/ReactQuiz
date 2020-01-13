import React from 'react'
import { ReactComponent as MoreTime } from '../images/icons/moreTime.svg'
import { ReactComponent as Clue } from '../images/icons/clue.svg'
import { ReactComponent as Fifty } from '../images/icons/fifty.svg'
import { Animated } from 'react-animated-css'

class Instructions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCount: 10,
      screen: 'x'
    }
  }

  componentDidMount () {
    // this.timeoutID = setTimeout(() => {
    //   console.log('thats the kind of delay I want')
    // }, 4000)
  }

  render () {
    return (
      <div className='canvas' id='instructions'>
        <Animated animationIn='fadeIn' animationInDuration={1000}>
          <div className='instuctionsList p-5'>
            <h2 className='Title mb-4'>How to play</h2>
            <p>Choose from one of three categories - <span className='important-text'>Film, Music</span> or <span className='important-text'>Sports</span></p>
            <p>Now, its you versus the clock. <br /><br />10 questions, with 30 seconds to answer each question</p>
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
              <p>Use them wisely, you only get one of each type - per game.</p>
            </div>
            <div className='mt-5 d-flex justify-content-center'>
              <div onClick={() => this.props.onClick()} className='ready-to-play-button text-center'>Ready to play</div>
            </div>
          </div>
        </Animated>
      </div>
    )
  }
}

export default Instructions
