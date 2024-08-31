export const reqPoke = async(pokemon) => {
    try {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      const data = await resp.json()
      const {stats} = data
      const {abilities} = data
      const {sprites} = data
      const nombre = data.name
      const imagen = sprites.other['official-artwork'].front_default
  
      const estadisticas = stats.map((stats)=>({
          nombre: stats.stat.name,
          base: stats.base_stat
      }))
  
      const habilidades = abilities.map((abilities)=>({
          habilidad: abilities.ability.name
      }))
  
      const infoPoke = {
        nombre,
        imagen,
        estadisticas,
        habilidades
      };
  
      return infoPoke
    } catch (err) {
      console.log(err)
    }
  }