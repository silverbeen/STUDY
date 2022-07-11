import styled from '@emotion/styled';
import Text from '../../../common/Text/Text';
import AppointButton from '../Button/AppointButton';
import DetailButton from '../Button/DetailButton';
import ExpectButton from '../Button/ExpectButton';
import { ShopsListType } from '../ShopList/ShopList';
import NextIcon from './NextIcon';

type Props = {
  item: ShopsListType;
  shopsList: ShopsListType[];
  onClick: (id: number | null) => void;
  selected: boolean;
};

const ListItem = ({ item, shopsList, onClick, selected }: Props) => {
  const markerMove = () => {
    shopsList
      ?.find((i: ShopsListType) => i.id === item.id)
      ?.marker?.trigger('click');
  };

  const handleClick = () => {
    const id = shopsList?.find((i: ShopsListType) => i.id === item.id)?.id;

    if (id) onClick(id);
    else onClick(null);

    markerMove();
  };

  return (
    <ListItemContainer id="test" onClick={handleClick} selected={selected}>
      <div className="text-wrapper">
        {item.naver_reservation_yn === 'N' && !item.naver_detail_link ? (
          <ExpectButton />
        ) : null}
        <Text color="black" size="1.6" weight="500">
          {item.name}
        </Text>
        <div className="type-box">
          {item.training_type_names.map((i, idx) => {
            const len = item.training_type_names.length;

            if (len === idx + 1) {
              return <span key={idx}>{i}</span>;
            }
            return <span key={idx}>{i + ' / '}</span>;
          })}

          <span>{' - '}</span>
          <span>{item.subtitle}</span>
        </div>

        <Text color="#6e6e6e" size="1.3" weight="200">
          {item.addr + ' ' + item.addr_detail}
        </Text>
        <Text color="#6e6e6e" size="1.3" weight="200">
          {item.tel_no}
        </Text>
        {item.naver_reservation_yn === 'Y' ? (
          <AppointButton url={item.naver_reservation_link} />
        ) : (
          item.naver_detail_link && (
            <DetailButton detailUrl={item.naver_detail_link} />
          )
        )}
      </div>
      <NextIcon />
    </ListItemContainer>
  );
};

export default ListItem;

type styledProps = {
  selected: boolean;
};

const ListItemContainer = styled.div<styledProps>`
  background-color: ${({ selected }) => (selected ? '#f7f5f5' : undefined)};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid rgb(197, 197, 197);
  cursor: pointer;

  .type-box {
    margin-bottom: 8px;
    font-size: 1.3rem;
    font-weight: 200;
    color: #b28a6d;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
  }
`;
