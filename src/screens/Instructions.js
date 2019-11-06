import React from 'react'

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
      <div>
        <p>How To Play</p>
        <p>Choose from 1 of 3 categories - Film, Music or Sports</p>
        <p>Now you are up against the clock. </p>
        <p>10 questions - 30 seconds a piece. </p>
        <p>How many can you get correct can you score ?</p>
        <p>Finding some of the questions tough, why not use a Life token</p>
        <p>Life Tokens</p>
        <p>[egg timer] icon - will give you more time to answer the question</p>
        <p>[50/50] icon - will give you more time to answer the question</p>
        <p>[clue] will give you a little bit more time as well as a clue to answer the question.</p>
        <p>Use them wisely, you only get one of each type - on a play through.</p>
      </div>
    )
  }
}

export default Instructions
