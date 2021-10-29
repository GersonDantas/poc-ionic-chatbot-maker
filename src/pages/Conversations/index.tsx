import { ReactNode } from 'react';

import { Container } from './styles';

interface ConversationsProps {
  children: ReactNode;
}

function Conversations({ children }: ConversationsProps) {
  return (
    <Container>
      <h1>Conversations</h1>
      {children}
    </Container>
  );
};

export {Conversations};
