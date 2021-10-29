import { ReactNode } from 'react';

import { Container } from './styles';

interface MenuPageProps {
  children: ReactNode;
}

function MenuPage({ children }: MenuPageProps) {
  return (
    <Container>
      <h1>MenuPage</h1>
      {children}
    </Container>
  );
};

export default MenuPage;
