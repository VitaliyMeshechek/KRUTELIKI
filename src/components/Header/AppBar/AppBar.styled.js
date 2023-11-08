import styled from '@emotion/styled';
import { colors, breakPoints } from '../../../base-styles/variables';
// import carDesk1x from '../../../images/car-desk@1x.png';
// import carDesk2x from '../../../images/car-desk@2x.png';
// import carTab1x from '../../../images/car-tab@1x.png';
// import carTab2x from '../../../images/car-tab@2x.png';
// import carMob1x from '../../../images/car-mob@1x.png';
// import carMob2x from '../../../images/car-mob@2x.png';
import Car from '../../../images/car.png';
import { keyframes } from '@emotion/react';

export const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;
  align-items: center;
  width: 100vw;
  /* height: 70px; */
  /* z-index: 999; */

  background-color: ${colors.white};
  border: 0;

  @media screen and (min-width: ${breakPoints.tablet}) {
    /* padding-top: 80px; */
    /* height: 80px; */
  }
  @media screen and (min-width: ${breakPoints.desktop}) {
    /* padding-top: 60px; */
    /* height: 100px; */
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LineHeader = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  /* margin-bottom: 2px; */
  border-radius: 1px;
  background-color: ${colors.yellow};
`;

const carAnimationForTablet = keyframes`
  from {
    transform: translateX(150px); 
  }
  
  to {
    transform: translateX(590px);
  }   
  `;

const carAnimationForDesktop = keyframes`
  from {
    transform: translateX(150px); 
  }
  
  to {
    transform: translateX(1130px);
  }   
  `;

export const MovingCarSpeed = styled.div`
  position: absolute;
  width: 87px;
  height: 50px;

  animation-play-state: running;
  background-image: url(${Car});
  background-image: none;
  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: ${breakPoints.tablet}) {
    background-image: url(${Car});
    animation: ${carAnimationForTablet} 7s;
    animation-iteration-count: infinite;
    top: 50px;
  }
  @media (min-width: ${breakPoints.desktop}) {
    background-image: url(${Car});
    animation: ${carAnimationForDesktop} 7s;
    animation-iteration-count: infinite;
    top: 70px;
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
