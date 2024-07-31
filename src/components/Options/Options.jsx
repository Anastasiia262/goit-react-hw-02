import { List, Item, PercentageItem } from './Options.styled';
import PropTypes from 'prop-types';

export const Options = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item value="good">Good: {good}</Item>
      <Item value="neutral">Neutral: {neutral}</Item>
      <Item value="bad">Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <PercentageItem value={positivePercentage}>
        Positive feedback: {positivePercentage ? positivePercentage : 0}%
      </PercentageItem>
    </List>
  );
};

Options.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};