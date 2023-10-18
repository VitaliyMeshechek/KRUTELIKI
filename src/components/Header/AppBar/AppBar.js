import { useState } from 'react';
import { AppBarWrapper, Header } from './AppBar.styled';
import { Container } from 'components/ReusableComponents/MainContaner.styled.js';

export const AppBar = () => {
  return (
    <>
      <AppBarWrapper>
        <Container>
          <Header>
            <Logo close={closeMenu} />
            <BurgerMenu
              isMenuOpen={menuOpen}
              user={isLoggedIn}
              openMenu={toggleMenu}
            />
          </Header>
        </Container>
      </AppBarWrapper>
    </>
  );
};
