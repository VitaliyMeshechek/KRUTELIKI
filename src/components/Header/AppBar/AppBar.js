import { useState } from 'react';
import {
  AppBarWrapper,
  Header,
  SiteNavWrapper,
  NavWrapper,
  MovingCarSpeed,
  LineHeader,
} from './AppBar.styled';
import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NavMenu } from '../NavMenu/NavMenu';
import { BurgerMenuBtn } from '../BurgerMenu/BurgerMenuBtn';
import { Logo } from '../Logo/Logo';
import { OrderBtn } from 'components/OrderForm/OrderBtn';

export const AppBar = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };
  const closeMenu = () => {
    if (menuOpen) {
      setIsMenuOpen(false);
    }
    return;
  };
  return (
    <>
      <AppBarWrapper>
        <Container>
          <Header>
            <Logo close={closeMenu} />
            <MovingCarSpeed>
              <OrderBtn />
            </MovingCarSpeed>

            {/* <SiteNavWrapper>
              <NavMenu></NavMenu>
            </SiteNavWrapper> */}
            <NavWrapper>
              <BurgerMenuBtn toggle={toggleMenu} isMenuOpen={menuOpen} />
              <BurgerMenu isMenuOpen={menuOpen} openMenu={toggleMenu} />
            </NavWrapper>
          </Header>
          <LineHeader />
        </Container>
      </AppBarWrapper>
    </>
  );
};
