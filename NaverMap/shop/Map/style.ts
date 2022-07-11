import styled from '@emotion/styled';

export const MapLayout = styled.div`
  width: 75%;
  height: calc(100vh - 8rem - 65px);
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c5c5c5;

  @media (max-width: 520px) {
    display: none;
  }

  .bubble-back {
    .bubble-text {
      color: white;
      border: 2px solid red;
      background-color: black;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .triangle-black {
      position: relative;
      right: -16px;
      bottom: 1px;

      .triangleB {
        width: 0;
        height: 0;
        border-color: red transparent transparent;
        border-style: solid;
        border-width: 8px 4px 0;
        pointer-events: none;
      }

      .triangleW {
        border-color: black transparent transparent;
        border-style: solid;
        border-width: 8px 4px 0;
        pointer-events: none;
        position: absolute;
        top: -3px;
      }
    }
  }

  .bubble-text {
    font-family: 'S-Core Dream';
    font-weight: Medium;
    min-width: 124px;
    max-width: 214px;
    width: fit-content;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
    padding: 3px;
    align-items: center;

    span {
      margin: 0 5px;
      font-size: 1.4rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .triangle-wrap {
    position: relative;
    right: -16px;
    bottom: 1px;

    .triangleB {
      width: 0;
      height: 0;
      border-color: black transparent transparent;
      border-style: solid;
      border-width: 8px 4px 0;
      pointer-events: none;
    }

    .triangleW {
      border-color: white transparent transparent;
      border-style: solid;
      border-width: 8px 4px 0;
      pointer-events: none;
      position: absolute;
      top: -3px;
    }
  }
`;

export const Button = styled.button`
  width: fit-content;
  font-weight: 200;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  box-sizing: border-box;
  color: white;
  font-size: 1.4rem;
  background-color: #00c73c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;

  & img {
    margin-right: 0.5rem;
  }
`;
