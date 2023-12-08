import React from 'react'
import { StyledParagraph } from './style'


interface ParagraphProps {
  fontSize: number;
  children: string
}

const CustomParagraph : React.FC<ParagraphProps> = ({fontSize, children}) => {
  return <StyledParagraph fontSize={fontSize}>{children}</StyledParagraph>
}

export default CustomParagraph
