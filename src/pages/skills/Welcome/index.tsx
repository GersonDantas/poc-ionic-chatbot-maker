import { ReactNode } from 'react';

import { Container } from './styles';

interface WelcomeProps {
  children: ReactNode;
}

function Welcome({ children }: WelcomeProps) {
  return (
    <Container>
      <h1>Welcome</h1>
      {children}
    </Container>
  );
};

export default Welcome;
