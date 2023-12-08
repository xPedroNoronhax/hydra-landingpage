import styled from "styled-components"

export const PrimaryButton = styled.button `
color: #343045;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 155px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
  border: none; // Remove a borda se você quiser um botão totalmente arredondado
  cursor: pointer;
  text-transform: uppercase;
`
export const SecondaryButton = styled.button`
  width: 154px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  `

  export const AnnounceButton = styled(PrimaryButton)`
  width: 214px;
  height: 48px;
  flex-shrink: 0;
  color: #343045;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `

  export const CardButton = styled(PrimaryButton)`
  width: 154px;
  height: 48px;
  flex-shrink: 0;
  `
