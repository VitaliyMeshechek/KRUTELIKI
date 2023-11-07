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
import { OrderForm } from 'components/OrderForm/OrderForm';

export const AppBar = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [orderFormOpen, setIsOrderFormOpen] = useState(false);
  const [anim, setAnim] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setIsMenuOpen(false);
    }
    return;
  };

  const toggleOrderForm = () => {
    setIsOrderFormOpen(prevIsOrderFormOpen => !prevIsOrderFormOpen);
  };

  const closeOrderForm = () => {
    if (orderFormOpen) {
      setIsOrderFormOpen(false);
    }
    return;
  };

  return (
    <>
      <AppBarWrapper>
        <Container>
          <Header>
            <Logo close={closeMenu} />

            <MovingCarSpeed className={anim ? 'slide' : ''}>
              <OrderBtn
                toggleOrder={toggleOrderForm}
                isOrderFormOpen={orderFormOpen}
              />
              <OrderForm
                isOrderFormOpen={orderFormOpen}
                openForm={toggleOrderForm}
              />
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
