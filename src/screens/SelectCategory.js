import React from 'react'
import filmButton from '../images/menus/filmButton.jpg'
import musicButton from '../images/menus/musicButton.jpg'
import sportButton from '../images/menus/sportButton.jpg'
import { Animated } from 'react-animated-css'

class SelectCategory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCount: 10,
      screen: 'categories'
    }
  }

  render () {
    return (
      <div className='canvas' id='select-category'>
        <Animated animationIn='zoomIn h-100'>
          <div className='h-100 d-flex flex-column justify-content-around align-items-center'>
            <div style={{ backgroundImage: 'url(' + filmButton + ')' }} className='category-button d-flex align-items-center justify-content-center' onClick={() => this.props.onClick('films')}>FILM</div>
            <div style={{ backgroundImage: 'url(' + musicButton + ')' }} className='category-button d-flex align-items-center justify-content-center' onClick={() => this.props.onClick('music')}>MUSIC</div>
            <div style={{ backgroundImage: 'url(' + sportButton + ')' }} className='category-button d-flex align-items-center justify-content-center' onClick={() => this.props.onClick('sports')}>SPORT</div>
          </div>
        </Animated>
      </div>

    )
  }
}

export default SelectCategory
