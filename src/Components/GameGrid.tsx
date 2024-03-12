import React, { useEffect, useState } from "react";
import ApiClient from "../Services/Api-client";
import { chakra, Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
