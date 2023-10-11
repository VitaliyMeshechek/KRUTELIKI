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
