import React, { useCallback, useEffect } from 'react'

import CategoriasContext from './CategoriasContext'

export default function useModel(categoriaName: string) {
    const { registerCategoria, unregisterCategoria, getCategoriaByName } = React.useContext(
        CategoriasContext
    )

    useEffect(() => () => unregisterCategoria(categoriaName), [
        categoriaName,
        unregisterCategoria
    ])

    const getCategoria = useCallback(() => getCategoriaByName(categoriaName), [
        getCategoriaByName,
        categoriaName
    ])

    return {
        registerCategoria,
        getCategoria
    }
}