import { ReactNode } from 'react';

import { Container } from './styles';

interface IAintentionsProps {
  children: ReactNode;
}

function IAintentions({ children }: IAintentionsProps) {
  return (
    <Container>
      <h1>IAintentions</h1>
      {children}
    </Container>
  );
};

export default IAintentions;
