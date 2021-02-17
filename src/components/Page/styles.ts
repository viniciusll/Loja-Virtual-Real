import styled from 'styled-components'

export const Container = styled.div`
  .colored:nth-child(1) {
    background: #d43535;
    background-size: 100%;

    @media (min-width: 200px) and (max-width: 500px) {
      background: #d43535;
    }

    @media (min-width: 501px) and (max-width: 800px) {
      background: #d43535;
    }

    @media (min-width: 801px) {
      background: #d43535;
    }
  }
  .colored:nth-child(2) {
    background-image: linear-gradient(to right, #12c412, #f525af);

    @media (min-width: 200px) and (max-width: 500px) {
      background-image: linear-gradient(to right, #12c412, #f525af);
    }

    @media (min-width: 501px) and (max-width: 800px) {
      background-image: linear-gradient(to right, #12c412, #f525af);
    }

    @media (min-width: 801px) {
      background-image: linear-gradient(to right, #12c412, #f525af);
    }
  }
  .colored:nth-child(3) {
    background: #1f3cad;

    @media (min-width: 200px) and (max-width: 500px) {
      background: #1f3cad;
    }

    @media (min-width: 501px) and (max-width: 800px) {
      background: #1f3cad;
    }

    @media (min-width: 801px) {
      background: #1f3cad;
    }

  }
  .colored:nth-child(4) {
    background: #e09c14;
  } 
  .colored:nth-child(5) {
    background: #07c404;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }
`

export const Spacer = styled.div`
  height:15vh;
  background: #07c404
`