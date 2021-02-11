import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'

import Espacos from './components/Espacos'
import App from './App'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Espacos/:name' element={<Espacos />} />
        </Routes>
    )
}