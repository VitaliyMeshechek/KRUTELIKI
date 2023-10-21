import { useState } from 'react';
import { 
  AppBarWrapper, 
  Header, 
  SiteNavWrapper, 
  NavWrapper, 
  MovingCarSpeed, 
 } from './AppBar.styled';
import { Container } from 'components/ReusableComponents/MainContaner.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NavMenu } from '../NavMenu/NavMenu';
import { BurgerMenuBtn } from '../BurgerMenu/BurgerMenuBtn';

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
            {/* <Logo close={closeMenu} /> */}
            <MovingCarSpeed></MovingCarSpeed>
            {/* <SiteNavWrapper>
              <NavMenu></NavMenu>
            </SiteNavWrapper> */}
            <NavWrapper>
            <BurgerMenuBtn toggle={toggleMenu} isMenuOpen={menuOpen} />
            </NavWrapper>
            <BurgerMenu
              isMenuOpen={menuOpen}
              openMenu={toggleMenu}
            />
          </Header>
        </Container>
      </AppBarWrapper>
    </>
  );
};
