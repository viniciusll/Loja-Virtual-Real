import styled from 'styled-components'

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url("images/s21.png");
    /* background-repeat: no-repeat; */
    background-size: cover;
  }
  .colored:nth-child(2) {
    background-image: url("images/s20.png");
    background-size: cover;
  }
  .colored:nth-child(3) {
    background-image: url("images/s20Fe.png");
    background-size: cover;
  }
  /* .colored:nth-child(4) {
    background: #bbfebb;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  } */
`

export const Spacer = styled.div`
  height:15vh;
  background: #e31b2f
`