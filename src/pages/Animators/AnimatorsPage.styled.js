import styled from '@emotion/styled';
import { breakPoints } from '../../base-styles/variables';
import GubkaBobDesk from '../../images/backgrounds/bg-gubkaBobDesk@1x.png';

export const Section = styled.section``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }
`;

export const Image = styled.div`
  display: flex;
  /* padding-top: 30px;
  padding-bottom: 5px; */
  align-items: center;
  background-size: auto;
  background-repeat: no-repeat;
  background-image: url(${GubkaBobDesk});
  width: 600px;
  height: 400px;

  @media screen and (min-width: ${breakPoints.mobile}) and (max-width: 767px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobDesk});
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: 1023px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobDesk});
  }

  @media screen and (min-width: 1024px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobDesk});
  }

  @media screen and (min-width: ${breakPoints.desktop}) and (max-width: 2560px) {
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobDesk});
  }
`;
