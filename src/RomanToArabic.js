import React from 'react'
import RomanConverter from './RomanConverter'

class RomanToArabic extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 0};

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({value: RomanConverter.fromRoman(event.value)});
  }

  handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input your roman number here:
          <input onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default RomanToArabic