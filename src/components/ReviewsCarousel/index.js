// Write your code here
import {Component} from 'react'
import './index.css'

let len = 0

export default class ReviewsCarousel extends Component {
  state = {pres: 0}

  std = () => {
    const {pres} = this.state
    console.log(pres)
    if (pres > 0) {
      this.setState(prev => ({pres: prev.pres - 1}))
    }
  }

  sti = () => {
    const {pres} = this.state
    console.log(pres)
    if (pres < len - 1) {
      this.setState(prev => ({pres: prev.pres + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {pres} = this.state
    len = reviewsList.length
    const {imgUrl, username, companyName, description} = reviewsList[pres]

    return (
      <div className="main">
        <div>
          <h1>Reviews</h1>
          <div className="start">
            <button onClick={this.std} data-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt=" left arrow"
              />
            </button>
            <div className="profile">
              <img src={imgUrl} alt={username} />
              <h4>{username}</h4>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button onClick={this.sti} data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
