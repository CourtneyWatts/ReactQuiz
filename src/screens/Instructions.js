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
        <p>and here are my instructions</p>
      </div>
    )
  }
}

export default Instructions
