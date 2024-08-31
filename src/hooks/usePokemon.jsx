import { useState } from "react"
import { reqPoke } from "../service/pokemon"


export const usePokemon = () => {
    const [infoPoke, setInfoPoke] = useState([])

    const handleGetPokemonInfo = async (pokemon, e) => {
      e.preventDefault();
      const data = await reqPoke(pokemon);
      if (data) {
        setInfoPoke(data);
      }
    }
  return {
    handleGetPokemonInfo,
    infoPoke
  }
}