import { usePokemon } from "../hooks/usePokemon"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"


export const CompPokemon = () => {
    const {handleGetPokemonInfo, infoPoke} = usePokemon()
  
    return (
    <>
      <BuscarPokemon handleGetPokemonInfo={handleGetPokemonInfo}/>
      <ContenedorPokemon infoPoke={infoPoke}/>
    </>
  )
}