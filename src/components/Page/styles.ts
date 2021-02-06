import styled from 'styled-components'

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url("images/s21.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;

    @media (min-width: 200px) and (max-width: 500px) {
      background-image: url("images/s21-Mobile-3.png");
      background-size: cover;
      background-attachment: fixed;
    }

    @media (min-width: 501px) and (max-width: 800px) {
      background-image: url("images/s21-Mobile.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }

    @media (min-width: 801px) {
      background-image: url("images/s21.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }
  }
  .colored:nth-child(2) {
    background-image: url("images/s20.png");
    background-size: cover;
    background-attachment: fixed;

    @media (min-width: 200px) and (max-width: 500px) {
      background-image: url("images/s20-Mobile-2.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }

    @media (min-width: 501px) and (max-width: 800px) {
      background-image: url("images/s20-Mobile.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }

    @media (min-width: 801px) {
      background-image: url("images/s20.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }
  }
  .colored:nth-child(3) {
    background-image: url("images/s20Fe.png");
    background-size: cover;
    background-attachment: fixed;

    @media (min-width: 200px) and (max-width: 500px) {
      background-image: url("images/s20Fe-Mobile-2.png");
      background-size: cover;
      background-attachment: fixed;
    }

    @media (min-width: 501px) and (max-width: 800px) {
      background-image: url("images/s20Fe-Mobile.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }

    @media (min-width: 801px) {
      background-image: url("images/s20Fe.png");
      background-size: 100% 100%;
      background-attachment: fixed;
    }

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