import { ReactNode } from 'react';

import { Container } from './styles';

interface SatisfactionProps {
  children: ReactNode;
}

function Satisfaction({ children }: SatisfactionProps) {
  return (
    <Container>
      <h1>Satisfaction</h1>
      {children}
    </Container>
  );
};

export default Satisfaction;
