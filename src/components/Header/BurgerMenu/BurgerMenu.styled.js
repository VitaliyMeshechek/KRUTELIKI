import styled from '@emotion/styled';
import { colors, breakPoints } from '../../../base-styles/variables';

export const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  width: 100vw;
  height: 100vh;
  top: 100%;
  left: 0;

  overflow-y: auto;
  background-color: ${colors.background};

  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

  @media screen and (min-width: ${breakPoints.desktop}) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  float: left;
  outline: 0;
  border: 0;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 4px;
  padding-right: 4px;
  background: none;
  cursor: pointer;
  @media screen and (min-width: ${breakPoints.desktop}) {
    display: none;
  }

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(3.5px, 3.5px);
      height: 2px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-47deg) translate(2px, -2px);
      height: 2px;
    }
  }
`;

export const Bar = styled.span`
  display: block;
  width: 17px;
  height: 2px;
  margin-bottom: 2px;
  border-radius: 1px;
  background-color: ${colors.yellow};
`;

export const NavWrapper = styled.div`
  @media screen and (min-width: ${breakPoints.tablet}) {
    padding-top: 100px;
  }
`;