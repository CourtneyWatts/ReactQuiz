import React from 'react'
import logo from '../images/icons/courtneyLogo.png'

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
      <div className='canvas' id='intro'>
        <div className='d-flex pl-5'>
          <div className='logo pt-5'>Guess <br />The <br />Year</div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={logo} />
        </div>
      </div>

    )
  }
}

export default Intro
