import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { OrderForm } from './OrderForm';
import { OrderBtnWrapper, OrderLink, Icon } from './OrderBtn.styled';

export const OrderBtn = () => {
  return (
    <OrderBtnWrapper>
      <OrderLink>
        Замовити
        <Icon />
      </OrderLink>
    </OrderBtnWrapper>
  );
};
