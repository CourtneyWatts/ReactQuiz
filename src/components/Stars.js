import React from 'react'

class Stars extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const starsArray = []
    const stars = (rating) => {
      for (let i = 1; i <= rating; i++) {
        starsArray.push(<span className='fa fa-star' />)
      }
      if (!Number.isInteger(rating)) {
        starsArray.push(<span className='fa fa-star-half' />)
      }
      return starsArray
    }

    return (
      <div className='mt-4 d-flex justify-content-center'>
        {stars(this.props.rating)}
      </div>
    )
  }
}

export default Stars
