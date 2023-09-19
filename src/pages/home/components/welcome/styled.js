import styled from "styled-components";

export const Container = styled.div`
  height: 150vh;
  width: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  width: auto;
  padding-top: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0;

  h1 {
    width: 398px;
    height: auto;
    font-family: league spartan;
    font-size: 118.599px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -7.796px;
    margin-bottom: 0;
    padding-bottom: 0;
    background: var(
      --Main-Gradient,
      linear-gradient(135deg, #be58cb 0%, #f10e5a 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .motto {
    display: flex;
    color: var(--Primary, #323232);
    font-size: 43.688px;
    font-style: normal;
    font-weight: 600;
    line-height: 49.984px; /* 98.611% */
    letter-spacing: -2.112px;
    margin-top: 22px;
    padding-top: 0;
    flex-shrink: 0;
  }
  p {
    color: var(--Subtitle, #777);
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400px;
    line-height: normal;
    letter-spacing: -1.5px;
  }
`;

export const Bar = styled.div`
  width: auto;
  height: 8px;
  margin-top: 20px;
  background: var(
    --Main-Gradient,
    linear-gradient(135deg, #be58cb 0%, #f10e5a 100%)
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LearnMore = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
