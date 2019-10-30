import React from 'react'

class SelectCategory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCount: 10,
      screen: 'categories'
    }
  }

  render () {
    console.log(this.props.onClick)
    return (
      <div className='h-100 d-flex flex-column justify-content-around align-items-center'>
        <div className='category-button' onClick={() => this.props.onClick('sports')}>Flex item 1</div>
        <div className='category-button' onClick={() => this.props.onClick('film')}>Flex item 2</div>
        <div className='category-button' onClick={() => this.props.onClick('music')}>Flex item 3</div>
      </div>
    )
  }
}

export default SelectCategory
