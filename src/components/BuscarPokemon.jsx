import { useState } from "react"

export const BuscarPokemon = ({handleGetPokemonInfo}) => {
    const [pokemon, setPokemon] = useState('')
  return (
    <>
      <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
        <form className="d-flex" action="" onSubmit={(e)=>{handleGetPokemonInfo(pokemon,e)}}>
          <input type="text" className="form-control me-2" placeholder="Search" onChange={(e)=>{setPokemon(e.target.value)}} />
          <input type="submit" value="Buscar gif" className="btn btn-outline-success-white btn btn-dark" />
        </form>
      </div>
    </>
  )
}