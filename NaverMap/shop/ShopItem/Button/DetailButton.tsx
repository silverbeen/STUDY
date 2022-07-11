import styled from '@emotion/styled';
import { Button } from '../../Map/style';

type Props = {
  detailUrl: string;
};

const DetailButton = ({ detailUrl }: Props) => {
  return (
    <DetailBtn onClick={() => window.open(`${detailUrl}`)}>상세보기</DetailBtn>
  );
};

const DetailBtn = styled(Button)`
  color: #747474;
  border: 1px solid #d7d7d7;
  background: white;
`;
export default DetailButton;
