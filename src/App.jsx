import { useState, useEffect } from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { Discription } from './components/Description/Description.styled';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Options } from './components/Options/Options';
import { Notification } from './components/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    } else {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const incrementFeedback = e => {
    const option = e.currentTarget.innerHTML.toLowerCase();
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const countTotalFeedback = () => Object.values(feedback).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total ? Math.floor((good * 100) / total) : 0;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Discription>
      <Section title="Sip Happens Café">
        <>
          <p>Please leave your feedback about our service by selecting one of the options below.</p>
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={incrementFeedback}
            onResetFeedback={resetFeedback}
            totalFeedback={total}
          />
        </>
      </Section>

      <Section title="Options">
        {total ? (
          <Options
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Discription>
  );
};

export default App;
