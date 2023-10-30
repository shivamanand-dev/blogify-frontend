import styled from "styled-components";

export const StyledDiwaliCanvas = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: -99999999;
  .pouce-wrapper {
    width: 450px;
    height: 300px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    overflow: hidden;
    transform-origin: bottom;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pouce-fountain {
    flex: 80%;
    position: relative;
  }
  .pouce {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .pouce-part {
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 25px solid #270f82;
    border-radius: 10px;
    position: relative;
    transform: scale(2);
  }
  .pouce-part:before,
  .pouce-part:after {
    content: "";
    position: absolute;
  }
  .pouce-part:before {
    width: 18px;
    bottom: -25px;
    transform: translate(-50%);
    border-bottom: 6px solid #d46f6f;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    left: 50%;
  }
  .pouce-part:after {
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 7px solid #d46f6f;
    left: 50%;
    transform: translate(-50%);
    top: 0;
  }
  .pouce-fountain > span {
    display: block;
    height: 77%;
    position: absolute;
    border-left: 1px dashed #db9801;
    transform-origin: 50% 100%;
    left: 50%;
    transform: translate(var(--tranlation));
    --tranlation: -50%;
    bottom: 4px;
    z-index: -1;
    width: 24px;
    border-radius: 50%;
  }
  .pouce-fountain > span,
  .pouce-fountain > span::before {
    animation: pouceAnimation 3s ease-in-out infinite alternate forwards;
  }
  .pouce-fountain > span:before {
    content: "*";
    position: absolute;
    width: 100%;
    height: 100%;
    color: #db9801;
    z-index: 222;
    display: block;
    right: -6px;
    opacity: 0;
  }
  .pouce-fountain > span:nth-child(1) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, -110deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(2) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, -800deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(3) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, -45deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(4) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, -0deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(5) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, 45deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(6) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, 80deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(7) {
    transform: translate(var(--translation, -50%))
      rotate(var(--rotation, 110deg)) scale(var(--scaling, 1));
  }
  .pouce-fountain > span:nth-child(odd)::before {
    top: 5px;
  }
  .pouce-fountain > span:nth-child(even)::before {
    top: -10px;
  }
  .pouce-fountain::before {
    content: "";
    width: 13px;
    height: 13px;
    position: absolute;
    left: 50%;
    background: #4d4c54;
    transform: translate(-50%);
    bottom: -3px;
    border-radius: 50%;
  }
  .pouce-fountain:after {
    content: "*";
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    bottom: 3px;
    transform: translate(-50%) rotate(0deg);
    font-size: 1.8em;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    color: #db9801;
    animation: startAnimation 3s ease-in-out infinite forwards;

    /* opacity: 0; */
  }
  @keyframes pouceAnimation {
    0% {
      height: 0%;
      opacity: 0;
    }
    100% {
      height: 77%;
      opacity: 1;
    }
  }
  @keyframes startAnimation {
    0% {
      opacity: 0;
    }
    25%,
    100% {
      opacity: 1;
    }
  }
`;
