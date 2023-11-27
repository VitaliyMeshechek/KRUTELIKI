import styled from '@emotion/styled';
import { breakPoints } from '../../src/base-styles/variables';
import mobileBG1x from '../images/backgrounds/bg-mobile@1x.png';
import mobileBG2x from '../images/backgrounds/bg-mobile@2x.png';
import tabletBG1x from '../images/backgrounds/bg-tablet@1x.png';
import tabletBG2x from '../images/backgrounds/bg-tablet@2x.png';
import desktopBG1x from '../images/backgrounds/bg-desktop@1x.png';
import desktopBG2x from '../images/backgrounds/bg-desktop@2x.png';

export const MainBackground = styled.div`
  position: relative;
  padding-top: 110px;
  height: 601px;
  background-image: url(${mobileBG1x});
  background-repeat: no-repeat;
  background-position: center;
  background-position: bottom;
  background-size: contain;
  /* z-index: 2000; */

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBG2x});
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding-top: 126px;
    background-image: url(${tabletBG1x});
    background-size: cover;
    height: 1193px;
    background-size: 818px 980px;
    background-position: center;
    background-position: bottom;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletBG2x});
    }
  }
  @media screen and (min-width: ${breakPoints.desktop}) {
    padding-top: 149px;
    background-image: url(${desktopBG1x});
    background-size: 950px 730px;
    height: 800px;
    background-position: center;
    background-position: bottom;
    /* background-position: bottom right; */

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopBG2x});
    }
  }
`;
