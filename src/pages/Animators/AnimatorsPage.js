import { Container } from 'components/ReusableComponents/MainContainer.styled';
import { Section, Image, Title, Paragraph } from './AnimatorsPage.styled';

export const AnimatorsPage = () => {
  return (
    <Container>
      <Section>
        <Title>АНІМАТОРИ</Title>
        <Paragraph>
          Аніматори-актори та квести на День народження або будь-яке інше дитяче
          свято. Ми допоможемо Вам вибрати яскравих героїв на свято, із
          захоплюючим ігровим сюжетом. Професійні аніматори-актори подарують
          Вашим дітям незабутню казку, свято на якому Ваша дитина буде
          посміхатись і радіти, та запам'ятає його на все життя. Аніматори
          проводять конкурси, ігри, танці, розважальні програми в будь-якому
          місці, будь-то будинок, квартира, садочок, ресторан, дитяча кімната
        </Paragraph>
        <Image></Image>
      </Section>
    </Container>
  );
};
