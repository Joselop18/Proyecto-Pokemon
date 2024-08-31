import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";

export const ContenedorPokemon = ({ infoPoke }) => {

  const { nombre, imagen, estadisticas, habilidades } = infoPoke;

  return (
    <div className="d-flex flex-row justify-content-center align-items-center row row-cols-2 p-2">
      <div className="card" style={{ width: "18rem" }}>
        {imagen && <img src={imagen} className="card-img-top" alt={`${nombre} sprite`} />}
        <div className="card-body">
          <h5 className="card-title">Pokemon: {nombre}</h5>
          {estadisticas && estadisticas.length > 0 && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Estadísticas:</strong></li>
              {estadisticas.map((estadisticas) => (
                <li key={estadisticas.nombre} className="list-group-item">
                  {estadisticas.nombre}  {estadisticas.base}
                </li>
              ))}
            </ul>
          )}
          {habilidades && habilidades.length > 0 && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Habilidades:</strong></li>
              {habilidades.map((habilidades) => (
                <li key={habilidades.habilidad} className="list-group-item">
                  {habilidades.habilidad}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};