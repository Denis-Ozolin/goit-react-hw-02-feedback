const { Component } = require("react");
// import PropTypes from 'prop-types';

class Feedback extends Component{
  // static defaultProps = {
  //   inititalGood: 0,
  //   inititalNeutral: 0,
  //   inititalBad: 0
  // }

  // static propTypes = {
  //     good: PropTypes.number.isRequired, 
  //     neutral: PropTypes.number.isRequired, 
  //     bad: PropTypes.number.isRequired, 
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
  }

  handleGoodCounter = () => {
    // let feedback = e.target.value;
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  handleNeutralCounter = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }
  
  handleBadCounter = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round(prevState.good * 100 / prevState.total),
    }));
  }

  render() {
    return (
      <div>
        <h1>Please leave Feedback</h1>
        <button type="button" value="good" onClick={this.handleGoodCounter}>good</button>
        <button type="button" value="neutral" onClick={this.handleNeutralCounter}>neutral</button>
        <button type="button" value="bad" onClick={this.handleBadCounter}>bad</button>
        <div>
          <h2>Statistics</h2>
          <p>good: {this.state.good}</p>
          <p>neutral: {this.state.neutral}</p>
          <p>bad: {this.state.bad}</p>
          <p>total: {this.state.total}</p>
          <p>positive feedback: {this.state.positivePercentage}%</p>
        </div>
      </div>
    )
  }
}

export default Feedback;