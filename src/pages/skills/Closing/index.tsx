import { ReactNode } from 'react';

import { Container } from './styles';

interface ClosingProps {
  children: ReactNode;
}

function Closing({ children }: ClosingProps) {
  return (
    <Container>
      <h1>Closing</h1>
      {children}
    </Container>
  );
};

export default Closing;
