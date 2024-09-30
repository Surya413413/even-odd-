import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: newRandomNumber})
  }

  render() {
    const {count} = this.state
  
    return (
      <div className="bg-container">
        <h1>Count {`${count}`}</h1>
        {count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        <div>
          <button
            type="button"
            className="button-style"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
        </div>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
