import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/modal/slice';
import {
  AppBarWrapper,
  Header,
  SiteNavWrapper,
  NavWrapper,
  MovingCarSpeed,
  LineHeader,
  SlideCar,
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
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

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
    // dispatch(showModal(true));

    // openModal();
  };

  const closeOrderForm = () => {
    if (orderFormOpen) {
      setIsOrderFormOpen(false);
    }
    return;
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(showModal(false));
    }
  };

  return (
    <>
      <AppBarWrapper>
        <Container>
          <Header>
            <Logo close={closeMenu} />

            <MovingCarSpeed>
              <OrderBtn
                toggleOrder={toggleOrderForm}
                isOrderFormOpen={orderFormOpen}
              />
            </MovingCarSpeed>
            <OrderForm isOrderFormOpen={orderFormOpen} close={closeOrderForm} />

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
