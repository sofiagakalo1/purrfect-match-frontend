import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import { Title } from './Logout.styles';

const Logout = ({ close }) => {
  return (
    <Container>
      <Section>
        <Title as="h2">Already leaving?</Title>
      </Section>
    </Container>
  );
};

export default Logout;
