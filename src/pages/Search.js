import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(called, loading, error, data);

  return (
    <div>
      <h2>Type character name to see their location</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Spinner...</div>}
      {error && <div>Something went wrong!!</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
