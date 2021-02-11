import React from 'react'

import { Container, Heading, Buttons, LinkComponent } from './styles'

interface Props {
    label: string,
    description: string
}

const defaultOverlayContent: React.FC<Props> = ({
    label, description
}) => {
    return (
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>

            <Buttons>
                <button>Comprar</button>
                <button className="white">
                    <LinkComponent to={'/Espacos/'+label}>
                        Ver modelos
                    </LinkComponent>
                </button>
            </Buttons>
        </Container>
    )
}

export default defaultOverlayContent