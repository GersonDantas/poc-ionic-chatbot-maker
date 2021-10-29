import { ReactNode } from 'react';

import { Container } from './styles';

interface HorarysProps {
  children: ReactNode;
}

function Horarys({ children }: HorarysProps) {
  return (
    <Container>
      <h1>Horarys</h1>
      {children}
    </Container>
  );
};

export default Horarys;
