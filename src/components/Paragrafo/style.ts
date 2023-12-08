import styled from "styled-components";

interface ParagraphProps {
  fontSize: number;
}

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${(props) => props.fontSize}px;
  color: #FFF;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`
export const CardParagraph = styled(StyledParagraph)`
    margin: 0;
    max-width: 250px;
    color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`
