import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total) {
      return `${Math.round((good / total) * 100)}`;
    }
    return '0%';
  };

  incrementHandler = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']} // Передаем в компонент кнопок весь стейт
            onIncrement={this.incrementHandler} // Метод для названий кнопок и инкримента
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={this.countTotalFeedback} // Передаем в компонент статистики подсчет всех отзывов
            positivePercentage={this.countPositiveFeedbackPercentage} // Туда же передаем подсчет хороших отзывов
          />
        </Section>
      </>
    );
  }
}

export default App;
