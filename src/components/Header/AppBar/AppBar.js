import { useState } from 'react';
import { AppBarWrapper, Header } from './AppBar.styled';
import { Container } from 'components/ReusableComponents/MainContaner.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

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
