import styled from 'styled-components'

interface Container {
  backgroundColor: string
}

export const Container = styled.div<Container>`
  .colored:nth-child(1) {
    background: ${(props) => props.backgroundColor};
    background-size: 100%;
  }
  .colored:nth-child(2) {
    background-image: ${(props) => props.backgroundColor}
  }
  .colored:nth-child(3) {
    background: ${(props) => props.backgroundColor};
  }
  .colored:nth-child(4) {
    background: ${(props) => props.backgroundColor};
  } 
  .colored:nth-child(5) {
    background: ${(props) => props.backgroundColor};
  }
  .colored:nth-child(6) {
    background: ${(props) => props.backgroundColor};
  }
  .colored:nth-child(7) {
    background: ${(props) => props.backgroundColor};
  }
`

export const Spacer = styled.div`
  height:15vh;
  background: #07c404
`