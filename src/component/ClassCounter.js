import React, { Component } from "react"

class ClassCounter extends Component {
  //w/o constructor "this." will be undefined
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>
          Counter using Class Component with the help of{" "}
          <code>Constructor</code>:
        </h2>
        <button onClick={() => this.incrementCount()}>
          Count:{this.state.count}
        </button>
      </div>
    )
  }
}

export default ClassCounter
