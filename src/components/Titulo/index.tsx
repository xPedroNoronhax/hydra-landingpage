// Importe as bibliotecas necessárias
import React from 'react';
import { StyledTitle } from './styles';

// Defina a interface para as props
interface TitleProps {
  fontSize: number;
  children: string
}

// Defina o componente funcional
const CustomTitle: React.FC<TitleProps> = ({ fontSize, children }) => {
  return <StyledTitle fontSize={fontSize}>{children}</StyledTitle>;
};

export default CustomTitle;
