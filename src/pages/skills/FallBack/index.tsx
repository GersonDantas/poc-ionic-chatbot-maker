import { ReactNode } from 'react';

import { Container } from './styles';

interface FallBackProps {
  children: ReactNode;
}

function FallBack({ children }: FallBackProps) {
  return (
    <Container>
      <h1>FallBack</h1>
      {children}
    </Container>
  );
};

export default FallBack;
