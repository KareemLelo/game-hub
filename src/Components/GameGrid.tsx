import React, { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

//This is also Taken to useGames Hook
/* interface Games {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Games[];
} */

//This code is all taken to useGames Hook for a better design
/*
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }); */

const GameGrid = () => {
  const { games, error } = useGames();

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
