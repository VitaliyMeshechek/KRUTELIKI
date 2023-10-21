import { useState } from 'react';
import { AppBarWrapper, Header, SiteNavWrapper } from './AppBar.styled';
import { Container } from 'components/ReusableComponents/MainContaner.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NavMenu } from '../NavMenu/NavMenu';

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
            {/* <SiteNavWrapper>
              <NavMenu></NavMenu>
            </SiteNavWrapper> */}
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
