import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  height: 50px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: none;
  text-transform: capitalize;
  font-weight: 500;
  color: #3b3b3b;
  cursor: pointer;
  background-color: ${props => {
    switch (props.color) {
      case 'good':
        return '#05bc52';
      case 'neutral':
        return '#99cbfd';
      case 'bad':
        return '#f2385a';
      default:
        return '#aaaaaa';
    }
  }};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ResetButton = styled(Button)`
  background-color: #ff6347; // or any color you prefer
`;
