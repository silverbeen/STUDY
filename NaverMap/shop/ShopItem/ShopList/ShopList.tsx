import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import ListItem from '../ListItem/ListItem';
import ShopApi from './api';
import Loader from '../../../common/Loader/Loader';

export interface ShopsListType {
  id: number;
  name: string;
  tel_no: string;
  addr: string;
  addr_detail: string;
  naver_reservation_yn: 'Y' | 'N';
  naver_reservation_link: string | '';
  naver_detail_link: string;
  training_type_names: string[];
  subtitle: '직영' | '파트너스';
  map_x_location: string;
  map_y_location: string;
  marker?: naver.maps.Marker | null;
  selected?: boolean;
}

export interface FieldType {
  training_type_cd: string;
  training_type_name: string;
}

type Props = {
  option: string;
  setOption: any;
  shopsList: ShopsListType[];
  list: ShopsListType[];
  loading: boolean;
  onClickItem: (id: number | null) => void;
  selectedItemId: number | null;
};

const ShopList = ({
  option,
  setOption,
  shopsList,
  list,
  loading,
  onClickItem,
  selectedItemId,
}: Props) => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('code', option);
  }, [option]);

  useEffect(() => {
    if (typeof router.query.option === 'string') {
      setOption(router.query.option);
    } else if (router.query.option === undefined || null) {
      setOption('all');
    }
  }, [router, setOption]);

  const fieldButton = useQuery(['field'], () => ShopApi.getFieldApi(), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const handleColor = (code: string) => {
    localStorage.setItem('code', code);
    router.push(`/shops?option=${code}`);
    setOption(code);
  };

  const isSelected = (id: number) => {
    if (selectedItemId === id) {
      return true;
    }
  };

  return (
    <ShopListContainer>
      <FieldContainer>
        <Button
          style={{
            backgroundColor: 'all' === option ? 'black' : 'white',
            color: 'all' === option ? 'white' : '#797979',
            border: 'all' === option ? '1px solid black' : '',
          }}
          onClick={() => handleColor('all')}
        >
          전체
        </Button>
        {fieldButton?.data?.trtp_json?.map((item: FieldType, idx: number) => {
          if (item.training_type_name !== null) {
            return (
              <Button
                key={idx}
                onClick={() => handleColor(item.training_type_cd)}
                style={{
                  backgroundColor:
                    item.training_type_cd === option ? 'black' : 'white',
                  color: item.training_type_cd === option ? 'white' : '#797979',
                  border:
                    item.training_type_cd === option ? '1px solid black' : '',
                }}
              >
                {item.training_type_name}
              </Button>
            );
          }
        })}
      </FieldContainer>
      <ListContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            {shopsList?.map((item: ShopsListType) => (
              <ListItem
                key={item.id}
                item={item}
                shopsList={list}
                onClick={onClickItem}
                selected={selectedItemId === item.id}
              />
            ))}
          </>
        )}
      </ListContainer>
    </ShopListContainer>
  );
};

export default ShopList;

const ShopListContainer = styled.div`
  min-width: 350px;
  width: 25%;
  height: 100%;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const FieldContainer = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  flex-direction: row;
  overflow: auto;
  padding: 1rem 2rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid rgb(197, 197, 197);
  border-top: 0.1rem solid rgb(197, 197, 197);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 54px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .none-shops {
    text-align: center;
    margin-top: 4rem;
    color: #939393;
    font-weight: 300;
  }
`;

const Button = styled.button`
  padding: 0 1.3rem;
  margin-right: 0.5rem;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  border: 0.1rem solid rgb(197, 197, 197);
  color: rgb(121, 121, 121);
  background-color: white;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.4rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  display: inline-block;
  white-space: nowrap;

  :hover {
    background: black;
    color: white;
  }

  :active {
    background: black;
    color: white;
    border: 0.1rem solid black;
  }
`;
