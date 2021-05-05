import React from 'react';
import Section from './SectionTitle';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notofication';
import Statistics from './Statistics';

const { Component } = require("react");

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    statisticsMarkup: false,
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positivePercentage: this.props.positivePercentage,
    statisticsMarkup: this.props.statisticsMarkup,
  }

  handleCounter = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.showStatistics();
    this.handleTotalFeedback();
    this.handlePositiveFeedbackPercentage();
  }

  handleTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  }

  handlePositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good * 100) / prevState.total),
    }));
  }

  showStatistics = () => {
    this.setState(() => ({
      statisticsMarkup: true
    }));
  }

  render() {
    return (
      <>
        <Section title="Please leave Feedback" children>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleCounter} />
        </Section>
        {!this.state.statisticsMarkup && (<Notification message="No feedback given" />)}
        {this.state.statisticsMarkup && (
          <Section title="Statistics" children>
            <Statistics options={this.state} />
          </Section>)}
      </>
    )
  }
}

export default App;