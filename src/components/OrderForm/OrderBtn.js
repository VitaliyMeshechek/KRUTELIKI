import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { OrderForm } from './OrderForm';
import { OrderBtnWrapper, OrderLink, Button } from './OrderBtn.styled';

export const OrderBtn = ({ toggleOrder, isOrderFormOpen }) => {
  return (
    <Button
      className={isOrderFormOpen ? 'active' : ''}
      aria-label="Open order form"
      onClick={toggleOrder}
    >
      <OrderLink>Замовити</OrderLink>
    </Button>
  );
};
