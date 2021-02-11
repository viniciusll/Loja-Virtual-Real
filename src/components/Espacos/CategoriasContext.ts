import React, { ReactNode } from 'react'

export interface Categoria {
    name: string
    espacos: string
}

interface CategoriasContext {
    registeredCategorias: Categoria[]
    registerCategoria: (categoria: Categoria) => void
    unregisterCategoria: (categoriaName: string) => void
    getCategoriaByName: (categoriaName: string) => Categoria | null
}

export default React.createContext<CategoriasContext>({} as CategoriasContext)