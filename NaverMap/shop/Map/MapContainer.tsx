import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Loader from '../../common/Loader/Loader';
import { ShopsListType } from '../ShopItem/ShopList/ShopList';
import { clickedMarkerHtml, markerHtml } from './MarkerHtml';
import { MapLayout } from './style';

type Props = {
  beginData: ShopsListType[];
  isSuccess: boolean;
  loading: boolean;
  onClickMarker: (id: number | null) => void;
};

const MapContainer = ({
  isSuccess,
  loading,
  beginData,
  onClickMarker,
}: Props) => {
  const [myLocation, setMyLocation] =
    useState<{ latitude: number; longitude: number } | string>('');

  const mapRef = useRef<HTMLElement | null | any>(null);
  const selectedMarker = useRef<any | null>(null);
  const markerRef = useRef<any | null>(null);

  //현재 위치를 추적합니다.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  // 지도를 생성합니다.
  useEffect(() => {
    if (typeof myLocation !== 'string' && isSuccess)
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude
        ),
        zoomControl: true,
      });
  }, [isSuccess, mapRef, myLocation]);

  useEffect(() => {
    function createMarker() {
      beginData?.map((item: ShopsListType) => {
        markerRef.current = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            Number(item?.map_x_location),
            Number(item?.map_y_location)
          ),
          map: mapRef.current,
          icon: {
            content: [markerHtml(item.name)].join(''),
            size: new naver.maps.Size(38, 58),
            anchor: new naver.maps.Point(19, 58),
          },
        });

        markerClickEvent(markerRef.current, item);

        item.marker = markerRef.current;
      });
    }

    function markerClickEvent(marker: any, item: ShopsListType) {
      naver.maps.Event.addListener(marker, 'click', (e: any) => {
        const name = item.name;

        // 이전에 클릭된 마커가 아닌 경우
        if (
          !selectedMarker.current ||
          (selectedMarker.current !== marker && name !== undefined)
        ) {
          onClickMarker(item.id);

          const selectedName = beginData?.find(
            (di: ShopsListType) => di.marker === selectedMarker.current
          )?.name;

          if (!!selectedMarker.current) {
            selectedMarker.current.setIcon({
              content: [markerHtml(selectedName || '지점')].join(''),
              size: new naver.maps.Size(38, 58),
              anchor: new naver.maps.Point(19, 58),
            });
          }

          marker.setIcon({
            content: [clickedMarkerHtml(name)].join(''),
            size: new naver.maps.Size(38, 58),
            anchor: new naver.maps.Point(19, 58),
          });

          // 클릭된 마커를 현재 클릭된 마커로 설정합니다.
          selectedMarker.current = marker;

          const mapLatLng = new naver.maps.LatLng(
            Number(item?.map_x_location),
            Number(item?.map_y_location)
          );

          // 선택한 마커로 부드럽게 이동합니다.
          mapRef.current.panTo(mapLatLng, e?.coord);
        }
      });
    }

    if (mapRef.current === null) {
      return;
    } else {
      if (isSuccess) {
        mapRef.current.setOptions({
          zoomControl: false,
        });

        createMarker();
      }
    }
  }, [isSuccess, myLocation, onClickMarker, beginData]);

  return (
    <>
      <Head>
        <script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}&callback=CALLBACK_FUNCTION`}
          defer={false}
        ></script>
      </Head>

      <MapLayout id="map">{!loading && <Loader />}</MapLayout>
    </>
  );
};

export default MapContainer;
