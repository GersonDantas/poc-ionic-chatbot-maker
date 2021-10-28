import { ReactNode } from 'react';

import { Container } from './styles';

interface AdressProps {
  children: ReactNode;
}

function Adress({ children }: AdressProps) {
  return (
    <Container>
      <h1>Adress</h1>
      {children}
    </Container>
  );
};

export default Adress;
