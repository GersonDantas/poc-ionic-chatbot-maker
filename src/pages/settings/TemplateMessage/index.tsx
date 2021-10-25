import { ReactNode } from 'react';

import { Container } from './styles';

interface TemplateMessageProps {
  children: ReactNode;
}

function TemplateMessage({ children }: TemplateMessageProps) {
  return (
    <Container>
      <h1>TemplateMessage</h1>
      {children}
    </Container>
  );
};

export default TemplateMessage;
