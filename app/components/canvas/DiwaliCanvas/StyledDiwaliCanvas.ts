import styled from "styled-components";

export const StyledDiwaliCanvas = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: -99999999;

  .container {
    height: 100vh;
    width: 37.5em;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    overflow: hidden;
  }
  .wishes-container {
    width: 28.12em;
    height: 28.12em;
    background: linear-gradient(
        217deg,
        rgba(255, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: calc(50% - 5.25em);
    left: calc(50% - 1.25em);
    box-shadow: 0 0 3.43em rgba(14, 2, 40, 0.7);
  }
  .lights {
    height: 1.25em;
    width: 1.25em;
    background-color: #432286;
    border-radius: 50%;
    position: absolute;
  }
  .lights-1 {
    left: 13.43em;
    top: 1.25em;
    box-shadow: 0 24.37em #432286, 11.87em 11.87em #432286,
      -11.87em 11.87em #432286;
    animation: lights1 2s infinite;
  }
  @keyframes lights1 {
    49% {
      background-color: #432286;
      box-shadow: 0 24.37em #432286, 11.87em 11.87em #432286,
        -11.87em 11.87em #432286;
    }
    50% {
      background-color: #f4c631;
      box-shadow: 0 24.37em #f4c631, 11.87em 11.87em #f4c631,
        -11.87em 11.87em #f4c631;
    }
    100% {
      background-color: #f4c631;
      box-shadow: 0 24.37em #f4c631, 11.87em 11.87em #f4c631,
        -11.87em 11.87em #f4c631;
    }
  }
  .lights-2 {
    left: 5.31em;
    top: 5.31em;
    box-shadow: 16.25em 0 #432286, 0 16.25em #432286, 16.25em 16.25em #432286;
    animation: lights2 2s 1s infinite;
  }
  @keyframes lights2 {
    49% {
      background-color: #432286;
      box-shadow: 16.25em 0 #432286, 0 16.25em #432286, 16.25em 16.25em #432286;
    }
    50% {
      background-color: #f4c631;
      box-shadow: 16.25em 0 #f4c631, 0 16.25em #f4c631, 16.25em 16.25em #f4c631;
    }
    100% {
      background-color: #f4c631;
      box-shadow: 16.25em 0 #f4c631, 0 16.25em #f4c631, 16.25em 16.25em #f4c631;
    }
  }
  .wishes {
    height: 100%;
    width: 100%;
    font-family: "Courgette", cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
    font-size: 3.75em;
    line-height: 1.6em;
    animation: wishes 2s 3s forwards;
    transform: scale(0);
    transform-origin: 50% 50%;
  }

  @keyframes wishes {
    100% {
      transform: scale(1);
    }
  }
  .diya-container {
    height: 25em;
    width: 25em;
    position: absolute;
    transform: translate(-50%, -50%);
    top: calc(50% + 37.5em);
    left: calc(50% + 9.37em);
    animation: diya 3s forwards;
  }
  @keyframes diya {
    100% {
      top: calc(50% + 1.1em);
    }
  }
  .diya {
    height: 9.37em;
    width: 18.75em;
    background-color: #e53760;
    border-radius: 0 0 9.37em 9.37em;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    box-shadow: 0 0 2.18em rgba(14, 2, 40, 0.4);
  }
  .inside {
    width: 18.75em;
    height: 3.75em;
    background-color: #79182f;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 7.5em;
  }

  .flame {
    height: 10.62em;
    width: 10.62em;
    background-color: #fdf1c2;
    border-radius: 10em 0;
    transform: rotate(-45deg);
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 2.25em;
    animation: scale-up 2s infinite;
  }
  @keyframes scale-up {
    50% {
      transform: rotate(-45deg) scale(1.05);
      bottom: 2.62em;
    }
  }
  .flame:after {
    content: "";
    position: absolute;
    height: 7.5em;
    width: 7.5em;
    background-color: #f4c631;
    border-radius: 7.5em 0;
    position: absolute;
    bottom: 0;
  }
  .line-1,
  .line-2 {
    position: absolute;
    height: 3.75em;
    width: 20em;
    border: none;
    border-bottom: 0.5em solid #ffffff;
    border-radius: 50%;
    left: -0.62em;
  }
  .line-2 {
    top: 3.75em;
  }
  .dots {
    height: 3.75em;
    width: 20em;
    border: none;
    border-bottom: 0.62em dotted #f4c631;
    position: absolute;
    border-radius: 50%;
    top: 1.87em;
    left: -0.62em;
  }

  .fab {
    color: #ff0000;
  }
  @media screen and (max-width: 600px) {
    .container {
      font-size: 8.5px;
    }
  }
`;
