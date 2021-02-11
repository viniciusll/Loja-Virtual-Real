import { useTransform } from 'framer-motion'

import React from 'react'

import useWrapperScroll from '../Model/useWrapperScroll'

import { Container, Header, Logo, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Loja Virtual Real</a>
          </li>
          <li>
            <a href="#">Made with ❤</a>
          </li>
          <li>
            <a href="#">by Vinicius Lemos</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay;