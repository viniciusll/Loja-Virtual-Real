import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {

    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        {
                            label: 'Espaço Vermelho',
                            description: 'ESPAÇO DAS COMEMORAÇÕES PREMIAÇÕES E DECORAÇÃO DE AMBIENTES'
                        },
                        {
                            label: 'Espaço Verde & Rosa',
                            description: 'ESPAÇO DA QUALIDADE AMBIENTAL – CONDECORARCOM.ART.BR'
                        },
                        {
                            label: 'Espaço Azul',
                            description: 'ESPAÇO DA LIBERDADE E INDEPENDÊNCIA – AUTOEMPREGO A EMPRESA É VOCE!'
                        },
                        {
                            label: 'Espaço Laranja',
                            description: 'ESPAÇO DA COMUNICAÇÃO AUDIOVISUAL'
                        },
                        {
                            label: 'Espaço Verde',
                            description: 'ESPAÇO DA EXPANSÃO EMPRESARIAL'
                        },
                    ].map(model => (
                        <ModelSection
                            key={model.label}
                            className="colored"
                            modelName={model.label}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={model.label}
                                    description={model.description}
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