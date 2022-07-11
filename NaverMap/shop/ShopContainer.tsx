import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import ConsultingButton from '../common/ConsultingButton/ConsultingButton';
import Layout from '../common/Layout/Layout';
import Page from '../common/Page/Page';
import MapContainer from './Map/MapContainer';
import ShopApi from './ShopItem/ShopList/api';
import ShopList from './ShopItem/ShopList/ShopList';

const ShopContainer = () => {
  const [option, setOption] = useState<string>('');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const shopsList = useQuery('shops', () => ShopApi.getShopsListApi('all'), {
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  });

  const { data, isSuccess } = useQuery(
    ['shops', option],
    () => ShopApi.getShopsListApi(option),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: !!option,
      keepPreviousData: true,
    }
  );

  const handleChangeSelectedItemId = useCallback((id: number | null) => {
    setSelectedItemId(id);
  }, []);

  return (
    <Layout title="지점안내" fixedNav>
      <Page fullWidth>
        <Flex>
          <ContentBox>
            <ShopList
              option={option}
              setOption={setOption}
              shopsList={data?.shop_group_list}
              list={shopsList?.data?.shop_group_list}
              loading={!data}
              onClickItem={handleChangeSelectedItemId}
              selectedItemId={selectedItemId}
            />
            <MapContainer
              beginData={shopsList?.data?.shop_group_list}
              loading={!shopsList}
              isSuccess={isSuccess}
              onClickMarker={handleChangeSelectedItemId}
            />
          </ContentBox>
          <span className="footer-text">© GymT Inc. All rights reserved.</span>
        </Flex>
      </Page>
      <ConsultingButton />
    </Layout>
  );
};

const Flex = styled.main`
  width: 100vw;
  height: calc(100vh - 8rem - 65px);
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  margin-top: 6rem;
  box-sizing: border-box;

  .footer-text {
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 5rem;
    color: #585858;
    font-size: 1rem;
    font-weight: 300;
  }
`;

const ContentBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export default ShopContainer;
