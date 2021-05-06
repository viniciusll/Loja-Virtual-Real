import React from 'react'
import { useParams } from 'react-router-dom'

import { Container, List } from './styles';
import { GlobalStyles } from '../../styles/GlobalStyle'
import Categorias from './Categorias'
import ListItem from './Components/ListItem'

const Espacos: React.FC = () => {
  const { name } = useParams()

  return (
    <Container>
      <GlobalStyles />

      <List>
        {Categorias.map(categoria => (
          categoria.espacos === name ? <ListItem
            backgroundColor={categoria.color}
            key={categoria.name}
          >
            <h1>{categoria.name}</h1>
          </ListItem>
            : null
        ))}
      </List>

    </Container>
  )
}

export default Espacos