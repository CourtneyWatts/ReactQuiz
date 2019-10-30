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
        <p>summary yo!</p>
      </div>
    )
  }
}

export default Summary
