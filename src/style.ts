import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'


const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  list-style: none;

}

body {
  width:100vw;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #302C42;

  @media (max-width: 768px) {
    padding-top: 16px;
    margin: 0 auto
  }
}

`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1272px;
  width:100vw;
  margin: 0 auto;
  margin-right: 84px ;
  margin-left: 84px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
    margin:0 auto;

  }

  @media (min-width: 820 px){
    max-width:80%
  }


`
