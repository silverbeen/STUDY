import styled from '@emotion/styled';
import { Button } from '../../Map/style';

const ExpectButton = () => {
  return <ExpButton>오픈예정</ExpButton>;
};

const ExpButton = styled(Button)`
  width: fit-content;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding: 0.4rem 0.8rem;
  background-color: #b28a6d;
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: auto;
`;

export default ExpectButton;
