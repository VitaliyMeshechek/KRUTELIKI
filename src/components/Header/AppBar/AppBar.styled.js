import styled from '@emotion/styled';
import { colors, breakPoints } from '../../../base-styles/variables';
import Car from '../../../images/McQueen.png';
import { keyframes } from '@emotion/react';

export const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;
  align-items: center;
  width: 100vw;
  height: 70px;
  /* z-index: 999; */

  background-color: ${colors.white};
  border: 0;

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding-top: 80px;
    height: 80px;
  }
  @media screen and (min-width: ${breakPoints.desktop}) {
    padding-top: 60px;
    height: 100px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

const carAnimationTab = keyframes`
  0%{transform: translateX(0)}
  5%{transform: translateX(30px)}
  10%{transform: translateX(60px)}
  15%{transform: translateX(90px)}
  20%{transform: translateX(120px)}
  25%{transform: translateX(150px)}
  30%{transform: translateX(180px)}
  35%{transform: translateX(210px)}
  40%{transform: translateX(240px)}
  45%{transform: translateX(270px)}
  50%{transform: translateX(300px)}
  55%{transform: translateX(330px)}
  60%{transform: translateX(360px)}
  65%{transform: translateX(390px)}
  70%{transform: translateX(420px)}
  75%{transform: translateX(450px)}
`;

const carAnimation = keyframes`
  0%{transform: translateX(0)}
  5%{transform: translateX(30px)}
  10%{transform: translateX(60px)}
  15%{transform: translateX(90px)}
  20%{transform: translateX(120px)}
  25%{transform: translateX(150px)}
  30%{transform: translateX(180px)}
  35%{transform: translateX(210px)}
  40%{transform: translateX(240px)}
  45%{transform: translateX(270px)}
  50%{transform: translateX(300px)}
  55%{transform: translateX(330px)}
  60%{transform: translateX(360px)}
  65%{transform: translateX(390px)}
  70%{transform: translateX(420px)}
  75%{transform: translateX(450px)}
  80%{transform: translateX(480px)}
  85%{transform: translateX(510px)}
  90%{transform: translateX(540px)}
  95%{transform: translateX(570px)}
  100%{transform: translateX(600px)}
`;

export const MovingCarSpeed = styled.div`
  position: absolute;
  left: 200px;
  width: 100px;
  height: 100px;
  background-image: url(${Car});

  @media screen and (min-width: ${breakPoints.tablet}) {
    left: 150px;
    animation: ${carAnimationTab} 4s;
    animation-iteration-count: infinite;
  }
  @media screen and (min-width: ${breakPoints.desktop}) {
    left: 200px;
    animation: ${carAnimation} 4s;
    animation-iteration-count: infinite;
  }
`;

export const SiteNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${breakPoints.desktop}) {
    margin-left: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media screen and (min-width: ${breakPoints.tablet}) {
    gap: 22px;
  }
`;
