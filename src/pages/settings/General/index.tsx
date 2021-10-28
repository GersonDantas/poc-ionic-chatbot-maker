import { ReactNode } from 'react';

import { Container } from './styles';

interface GeneralProps {
  children: ReactNode;
}

function General({ children }: GeneralProps) {
  return (
    <Container>
      <h1>General</h1>
      {children}
    </Container>
  );
};

export default General;
