import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { OrderForm } from './OrderForm';
import { OrderBtnWrapper, OrderLink, Button } from './OrderBtn.styled';
import ModalWrapper from 'components/ReusableComponents/Modal/ModalWrapper';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/modal/slice';

export const OrderBtn = ({ toggleOrder }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(showModal(true));

    toggleOrder();
  };

  return (
    <Button onClick={handleOpen}>
      <OrderLink>Замовити</OrderLink>
    </Button>
  );
};
