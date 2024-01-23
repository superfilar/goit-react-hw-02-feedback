import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from "./Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countZero = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnNames = Object.keys(this.state);
    return (
      <div className="App">
          <Section title="statistics">
            <FeedbackOptions
              options={btnNames}
              onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
          {this.countZero() ? (
            <Notification message="No feedback given" />
          ) : (
              <Section title="statistics">
                <Statistics
                  stat={this.state}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}/>
              </Section>
          )}
      </div>
    );
  }
}

export default App;