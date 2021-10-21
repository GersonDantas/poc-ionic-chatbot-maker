import { ReactNode } from 'react';

import { Container } from './styles';

interface CommonButtonProps {
  children: ReactNode;
}

function CommonButton({ children }: CommonButtonProps) {
  return (
    <Container>
      <h1>CommonButton</h1>
      {children}
    </Container>
  );
};

export default CommonButton;
