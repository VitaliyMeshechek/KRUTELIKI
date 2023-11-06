import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TbPaw } from 'react-icons/tb';
import { colors, breakPoints } from '../../base-styles/variables';

export const Button = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 140px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    padding-bottom: 20px;
    gap: 20px;
    bottom: 25px;
    right: 0px;
  }
`;

// export const OrderBtnWrapper = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* gap: 12px; */
//   /* padding-top: 8px; */

//   padding-left: 350px;
//   padding-top: 50px;

//   @media screen and (min-width: ${breakPoints.tablet}) {
//     flex-direction: row;
//     justify-content: center;
//     padding-bottom: 20px;
//     gap: 20px;
//     bottom: 25px;
//     right: 0px;
//   }
// `;
export const OrderLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 9px;
  padding-bottom: 9px;
  /* min-width: 165px; */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.38;
  color: ${colors.yellow};
  text-decoration: none;
  border: 2px solid ${colors.yellow};
  border-radius: 40px;
  :hover,
  :focus {
    color: ${colors.background};
    background: ${colors.grBlue};
  }

  &.active {
    color: ${colors.background};
    background-color: ${colors.yellow};
  }
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;
