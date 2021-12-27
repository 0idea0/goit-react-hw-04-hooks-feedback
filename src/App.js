import { useState } from 'react';

import Layout from './components/Layout';
import Section from './components/Section';
import Notification from './components/Notification';
import Statistics from './components/Statistics';
import CardInterface from './components/CardInterface';
import FeedbackOptions from './components/FeedbackOptions';

import './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = event => {
    switch (event.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <Layout>
      <CardInterface>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={clickHandler} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </CardInterface>
    </Layout>
  );
};

export default App;
