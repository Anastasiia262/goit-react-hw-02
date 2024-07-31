import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Item = styled.li`
  color: ${props => {
    switch (props.value) {
      case 'good':
        return '#05bc52';
      case 'neutral':
        return '#7bb7f2';
      case 'bad':
        return '#f2385a';
      default:
        return '#000';
    }
  }};
`;
export const PercentageItem = styled.li`
  color: ${({ value }) => {
    if (value >= 60 && value <= 100) {
      return '#05bc52';
    } else if (value < 60 && value >= 35) {
      return '#7bb7f2';
    } else if (value < 35 && value > 0) {
      return '#f2385a';
    } else {
      return '#000';
    }
  }};
`;