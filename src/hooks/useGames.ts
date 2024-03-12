import { useState, useEffect } from "react";
import ApiClient from "../Services/Api-client";
import { CanceledError } from "axios";

//Exported the interface so we can use it in the GameCards
export interface Games {
    id: number;
    name: string;
    background_image: string;
  }

  interface FetchGameResponse {
    count: number;
    results: Games[];
  }

const useGames = () => {
    
        const [games, setGames] = useState<Games[]>([]);
        const [error, setError] = useState("");
      
        useEffect(() => {
            const controller = new AbortController();
        
          ApiClient.get<FetchGameResponse>("/games",{signal:controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if(err instanceof CanceledError ) return;
                setError(err.message)});

            return () => controller.abort()
        },[]);

        return {games,error};
}

export default useGames;