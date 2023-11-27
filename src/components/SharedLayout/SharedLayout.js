import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/Header/AppBar/AppBar';
import { Link } from './SharedLayout.styled';
import { AnimatorsPage } from 'pages/Animators/AnimatorsPage';
import { Container } from 'components/ReusableComponents/MainContainer.styled';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
