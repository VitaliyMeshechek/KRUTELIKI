import styled from '@emotion/styled';
import { breakPoints } from '../../base-styles/variables';
import GubkaBobDesk from '../../images/backgrounds/bg-gubkaBobDesk@1x.png';
import GubkaBobDeskSm from '../../images/backgrounds/bg-gubkaBobDeskSm@1x.png';
import GubkaBobTab from '../../images/backgrounds/bg-gubkaBobTab@1x.png';
import GubkaBobMob from '../../images/backgrounds/bg-gubkaBobMob@1x.png';

export const Section = styled.section`
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: start; */
  align-items: center;
  padding-top: 0;
`;

export const Title = styled.h1`
  /* display: flex; */
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  /* text-align: center; */
  margin-bottom: 24px;
  margin-top: 20px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 38px;
    line-height: 52px;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  @media screen and (min-width: ${breakPoints.desktop}) and (max-width: 2560px) {
    font-size: 46px;
    line-height: 63px;
    margin-bottom: 40px;
    margin-top: 20px;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: start; */
  align-items: start;
  /* padding-top: 30px;
  padding-bottom: 5px; */
  background-size: auto;
  background-repeat: no-repeat;
  background-image: url(${GubkaBobMob});
  width: 280px;
  height: 187px;

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: 1023px) {
    /* margin-right: auto; */
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobTab});
    width: 360px;
    height: 240px;
  }

  @media screen and (min-width: 1024px) {
    /* margin-right: auto; */
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobDeskSm});
    width: 450px;
    height: 300px;
  }

  @media screen and (min-width: ${breakPoints.desktop}) and (max-width: 2560px) {
    /* margin-right: auto; */
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${GubkaBobDesk});
    width: 600px;
    height: 400px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 28px;
  color: red;
  flex-direction: row;
  width: 500px;
`;
