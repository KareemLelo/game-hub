import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

//Exported the interface so we can use it in the GameCards

export interface Platform {
  id:number 
  name:string 
  slug: string
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[]
    metacritic : number
  }

const useGames = (gameQuery : GameQuery) => useData<Games>('/games',{
  params: {
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.genre?.id,
    Ordering: gameQuery.SortOrder,
    Searh: gameQuery.searchText
  }}, [gameQuery])
export default useGames;