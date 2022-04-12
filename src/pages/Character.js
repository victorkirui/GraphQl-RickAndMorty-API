import "../App.css";
import React from "react";
import { useCharacterHook } from "../hooks/useCharacterHook";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();

  const { error, loading, data } = useCharacterHook(id);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong!!</div>;

  return (
    <div className="character">
      <div>
        <h1 style={{ color: "red" }}>{data.character.name}</h1>
        <img src={data.character.image} width={600} height={600} />
      </div>

      <div>
        <ul>
          {data.character.episode.map((episode) => {
            return (
              <li>
                {episode.episode} - <b>{episode.name}</b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Character;
