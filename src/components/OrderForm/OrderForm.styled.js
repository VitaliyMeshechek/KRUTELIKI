import styled from '@emotion/styled';
import { colors, breakPoints } from 'base-styles/variables';
import BgOrderForm from '../../images/backgrounds/bg-paperDesk@1x.png';

export const BackdropForm = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  width: 300px;
  /* height: 600px; */
  top: 0;
  left: 0;

  overflow-y: auto;
  /* background-color: ${colors.background}; */

  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(200%)')};

  @media screen and (min-width: ${breakPoints.tablet}) {
    top: -40%;
    left: 4%;
    width: 650px;
    /* width: 170px;
    height: 150px; */
  }

  @media screen and (min-width: ${breakPoints.desktop}) {
    top: 0;
    left: 25%;
    width: 650px;
    /* width: 190px;
    height: 150px; */
  }
`;

export const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color: ${colors.black};
  text-align: center;
  margin: 0;
  margin-bottom: -10px;
  margin-top: -10px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  gap: 24px;
  text-align: center;
  margin: 100px auto 0;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  padding: 40px 12px;
  background-size: auto auto;
  background-repeat: no-repeat;
  background-image: url(${BgOrderForm});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgOrderForm});
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding: 60px 75px;
    /* width: 608px; */
    margin: 140px auto 0;
    border-radius: 40px;
  }

  @media screen and (min-width: ${breakPoints.desktop}) {
    padding: 60px 75px;
    margin: 140px auto 0;
    border-radius: 40px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${colors.blue};
  border-radius: 40px;
  outline: none;

  :hover svg {
    fill: ${colors.yellow};
  }
  ${props =>
    props.valid &&
    `border-color : ${colors.green};
  `}

  ${props =>
    props.error &&
    `border-color: ${colors.red};
  `}
`;

export const Label = styled.label`
  position: relative;
  color: ${colors.gray};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const IconButton = styled.button`
  position: absolute;
  border: none;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  background: transparent;
  outline: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.blue};
  border-radius: 40px;
  padding: 10px 100px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${colors.white};
  margin-top: 10px;
  border: none;
  :hover {
    transform: scale(1.02);
    background: ${colors.grBlue};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding: 10px 201px;
  }
`;

// export const Subtitle = styled.p`
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 1.33;
//   color: ${colors.gray};
//   text-align: center;
// `;
