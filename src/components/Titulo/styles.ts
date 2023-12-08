// Importe as bibliotecas necessárias
import styled from 'styled-components';

// Defina a interface para as props
interface TitleProps {
  fontSize?: number;
}

// Crie o componente estilizado
export const StyledTitle = styled.h3<TitleProps>`
  font-size: ${(props) => props.fontSize}px;
  text-transform: uppercase;
  /* Adicione outros estilos conforme necessário */
`;

export const StrongTitle = styled(StyledTitle)`
color: #FFF;
font-family: Montserrat;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media (max-width:768px){
  font-size: 36px;
}
`
export const LightTitle = styled(StyledTitle)`
color: #FFF;
font-family: Montserrat;
font-size: 36px;
font-style: normal;
font-weight: 300;
line-height: normal;
`
export const StepTitle = styled(StyledTitle)`
color: #FFF;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const LightFormTitle = styled(LightTitle)`
text-transform: unset;
`

export const StrongBannerTitle = styled(StrongTitle)`
@media (max-width:768px){
  font-size: 16px;
}
`

export const LightBannerTitle = styled(StrongTitle)`
color: #FFF;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
line-height: normal;
@media (max-width:768px){
  font-size: 24px;

}
`

