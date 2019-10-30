import React from 'react'

class Intro extends React.Component {
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
        <p>This is my intro</p>
      </div>
    )
  }
}

export default Intro
