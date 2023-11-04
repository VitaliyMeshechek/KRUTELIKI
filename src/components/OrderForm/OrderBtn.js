import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { OrderForm } from './OrderForm';
import { OrderBtnWrapper, OrderLink } from './OrderBtn.styled';

export const OrderBtn = () => {
  return (
    <OrderBtnWrapper>
      <OrderLink>Замовити</OrderLink>
    </OrderBtnWrapper>
  );
};
