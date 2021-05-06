import React, { useState, useEffect } from 'react';

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'
import api from '../../data/api';

import { Container, Spacer } from './styles'

interface PageProps {
    backgroundColor: string
}

const Page: React.FC<PageProps> = ({ backgroundColor }) => {

    const [espacos, setEspacos] = useState<any[]>([]);

    const getEspaco = () => {
        api.get('/products/espacos').then(({ data: { espacos } }) => {
            setEspacos(espacos)
            console.log(espacos)
        })
    }

    useEffect(() => {
        getEspaco()
    }, [])

    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {espacos.map(model => (
                        <ModelSection
                            backgroundColor={model.color}
                            key={model._id}
                            className="colored"
                            modelName={model.nome}
                            overlayNode={
                                <DefaultOverlayContent
                                    nome={model.nome}
                                    descricao={model.descricao}
                                />
                            }
                        />
                    ))}
                </div>
                <Spacer />

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    )
}

export default Page