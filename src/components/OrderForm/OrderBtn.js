import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { OrderForm } from './OrderForm';
import { OrderBtnWrapper, OrderLink, Button } from './OrderBtn.styled';
import ModalWrapper from 'components/ReusableComponents/Modal/ModalWrapper';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/modal/slice';

export const OrderBtn = ({ toggleOrder }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showModal(false));

    toggleOrder();
  };

  return (
    <Button onClick={handleClose}>
      <OrderLink>Замовити</OrderLink>
    </Button>
  );
};
