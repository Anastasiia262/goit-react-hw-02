import { nanoid } from 'nanoid';
import { Container, Button, ResetButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <Container>
      {Object.keys(options).map(option => (
        <Button
          key={nanoid()}
          type="button"
          onClick={onLeaveFeedback}
          color={option}
        >
          {option}
        </Button>
      ))}
      {totalFeedback > 0 && (
        <ResetButton type="button" onClick={onResetFeedback}>
          Reset
        </ResetButton>
      )}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
