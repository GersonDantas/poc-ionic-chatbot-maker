import { ReactNode } from 'react';
import { IonButton } from '@ionic/react';
import styled from 'styled-components';

interface ButtonGeneratorProps {
  children: ReactNode;
  fill?: "clear" | "default" | "outline" | "solid" | undefined;
}

function ButtonGenerator({ children, fill }: ButtonGeneratorProps) {
  const MyIonButton = styled(IonButton)`
  `
  return (
    <MyIonButton fill={fill}>
      {children}
    </MyIonButton>
  );
};

export default ButtonGenerator;
