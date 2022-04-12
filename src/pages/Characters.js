import React from "react";
import { useCharactersHook } from "../hooks/useCharactersHook";
import { Link } from "react-router-dom";

function Characters() {
  const { error, loading, data } = useCharactersHook();

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong!!</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} className="card">
            <img src={character.image} />
            <h3>{character.name}</h3>
            <h6>{character.gender}</h6>
          </Link>
        );
      })}
    </div>
  );
}

export default Characters;
