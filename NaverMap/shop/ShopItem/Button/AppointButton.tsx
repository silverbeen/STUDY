import { Button } from '../../Map/style';

type Props = {
  url: string;
};

const AppointButton = ({ url }: Props) => {
  return (
    <Button onClick={() => window.open(`${url}`)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/naver-logo.png"
        alt="네이버 로고"
        width={20}
        height={20}
      />
      체험예약
    </Button>
  );
};

export default AppointButton;
