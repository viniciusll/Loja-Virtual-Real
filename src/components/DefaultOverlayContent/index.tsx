import React from 'react'

import { Container, Heading, Buttons, LinkComponent } from './styles'

interface Props {
    nome: string,
    descricao: string
}

const defaultOverlayContent: React.FC<Props> = ({
    nome, descricao
}) => {
    return (
        <Container>
            <Heading>
                <h1>{nome}</h1>
                <h2>{descricao}</h2>
            </Heading>

            <Buttons>
                <button className="white">
                    <LinkComponent to={'/Espacos/'+nome}>
                        Ver categorias
                    </LinkComponent>
                </button>
            </Buttons>
        </Container>
    )
}

export default defaultOverlayContent