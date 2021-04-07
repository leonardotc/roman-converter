import React from 'react'
import RomanConverter from './RomanConverter'

class ArabicToRoman extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: 'nulla' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    if (RomanConverter.isNumber(event.target.value)) {
      this.setState({ value: RomanConverter.toRoman(event.target.value) })
    } else {
      this.setState({ value: 0 })
    }
  }

  render () {
    return (
      <div>
        <div>
          <label>
            Input your arabic number here:
            <input onChange={this.handleChange} />
            <span> The roman correspondent is {this.state.value}</span>
          </label>
        </div>
      </div>
    )
  }
}

export default ArabicToRoman
