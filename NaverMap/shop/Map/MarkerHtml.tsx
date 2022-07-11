export const clickedMarkerHtml = (name: string) => `
  <div class="bubble-back" >
    <div class="bubble-text">
      <img
      src="/icons/icoMapPlacePin.svg"
      alt="지도 핀 아이콘"
      />
      <span>${name}</span>
    </div>
    <div class="triangle-black">
      <div class="triangleB"></div>
      <div class="triangleW"></div>
    </div>
  </div>
`;

export const markerHtml = (name: string) => `
  <div class="bubble-wrap" >
    <div class="bubble-text">
      <img
        src="/icons/icoMapPlace.svg"
        alt="지도 핀 아이콘"
      />
      <span>${name}</span>
    </div>
    <div class="triangle-wrap">
      <div class="triangleB"></div>
      <div class="triangleW"></div>
    </div>
  </div>
`;
