import useData from "./useData";

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

const useGames = () => useData<Games>('/games')
export default useGames;