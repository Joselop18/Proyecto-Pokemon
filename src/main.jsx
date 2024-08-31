import ReactDOM from 'react-dom/client'
import React from 'react'
import { CompPokemon } from './components/PokemonApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CompPokemon />
    </React.StrictMode>
)