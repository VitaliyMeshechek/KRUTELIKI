import styled from '@emotion/styled';
import { colors, breakPoints } from '../../../base-styles/variables';
// import carDesk1x from '../../../images/car-desk@1x.png';
// import carDesk2x from '../../../images/car-desk@2x.png';
// import carTab1x from '../../../images/car-tab@1x.png';
// import carTab2x from '../../../images/car-tab@2x.png';
// import carMob1x from '../../../images/car-mob@1x.png';
// import carMob2x from '../../../images/car-mob@2x.png';
import BgHedgehodDeskLg1x from '../../../images/backgrounds/bgHeader-desk@1x.png';
import BgHedgehodDeskLg2x from '../../../images/backgrounds/bgHeader-desk@2x.png';
import BgHedgehodDesk1x from '../../../images/backgrounds/bgHeader-desktop@1x.png';
import BgHedgehodDesk2x from '../../../images/backgrounds/bgHeader-desktop@2x.png';
import BgHedgehodTab1x from '../../../images/backgrounds/bgHeader-tab@1x.png';
import BgHedgehodTab2x from '../../../images/backgrounds/bgHeader-tab@2x.png';
import BgHedgehodMob1x from '../../../images/backgrounds/bgHeader-mob@1x.png';
import BgHedgehodMob2x from '../../../images/backgrounds/bgHeader-mob@2x.png';
import Car from '../../../images/car.png';
import { keyframes } from '@emotion/react';

export const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;
  align-items: center;
  width: 100%;

  background-color: ${colors.white};
  border: 0;
  /* background-size: cover; */

  @media screen and (min-width: ${breakPoints.mobile}) and (max-width: 767px) {
    background-repeat: no-repeat;
    background-image: url(${BgHedgehodMob1x});
  }

  /* @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgHedgehodMob2x});
  } */

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: 1023px) {
    /* padding-top: 80px; */
    /* height: 80px; */
    background-size: cover 148px;
    background-repeat: no-repeat;
    background-image: url(${BgHedgehodTab1x});

    /* @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgHedgehodTab2x});
    } */
  }

  @media screen and (min-width: 1024px) {
    /* padding-top: 80px; */
    /* height: 80px; */
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-image: url(${BgHedgehodDesk1x});

    /* @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgHedgehodDesk2x});
    } */
  }
  @media screen and (min-width: ${breakPoints.desktop}) and (max-width: 2560px) {
    /* padding-top: 60px; */
    /* height: 100px; */
    /* width: 100vw; */
    background-size: 1450px 148px;
    background-repeat: no-repeat;
    background-image: url(${BgHedgehodDeskLg1x});

    /* @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgHedgehodDeskLg2x});
    } */
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
  background-color: ${colors.red};
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
    animation: ${carAnimationForTablet} 10s;
    animation-iteration-count: infinite;
    top: 50px;
  }
  @media (min-width: ${breakPoints.desktop}) {
    background-image: url(${Car});
    animation: ${carAnimationForDesktop} 10s;
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
