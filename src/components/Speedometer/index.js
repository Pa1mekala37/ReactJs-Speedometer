import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increase = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.increase} className="acceleratebtn">
            Accelerate
          </button>
          <button onClick={this.decrease} className="applybrakebtn">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
