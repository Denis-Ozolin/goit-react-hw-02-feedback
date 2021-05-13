import React from 'react';
import Section from './SectionTitle';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notofication';
import Statistics from './Statistics';


const { Component } = require("react");

class App extends Component {
  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   positivePercentage: 0,
  //   statisticsMarkup: false,
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    statisticsMarkup: false
  }

  handleCounter = (event) => {
    const name = event.currentTarget.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1 
    }));

    this.showStatistics();
  }

  handleTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  handlePositiveFeedbackPercentage = () => 
    Math.round((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad));

  showStatistics = () => {
    this.setState(() => ({
      statisticsMarkup: true
    }));
  }

  render() {
    const array = ["good", "neutral", "bad"];
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave Feedback" children>
          <FeedbackOptions options={array} onLeaveFeedback={this.handleCounter} />
        </Section>
        {!this.state.statisticsMarkup && (<Notification message="No feedback given" />)}
        {this.state.statisticsMarkup && (
          <Section title="Statistics" children>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.handleTotalFeedback()}
              positivePercentage={this.handlePositiveFeedbackPercentage()}
            />
          </Section>)}
      </>
    )
  }
}

export default App;