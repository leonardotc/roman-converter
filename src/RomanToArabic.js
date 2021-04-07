import React from 'react'
import RomanConverter from './RomanConverter'

class RomanToArabic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (RomanConverter.isRomanNumber(event.target.value)) {
      this.setState({value: RomanConverter.fromRoman(event.target.value)})
    } else {
      this.setState({value: "nulla"})
    }
  }

  render() {
    return (
      <div>
        <div>
          <label>
            Input your roman number here:
            <input onChange={this.handleChange} />
            <span> The arabic correspondent is {this.state.value}</span>
          </label>
        </div>
      </div>
    );
  }
}

export default RomanToArabic