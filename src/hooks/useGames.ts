
import { GameQuery } from "../App";
import useData from "./useData";
export interface Platform{
  id : number ;
  name : string ;
  slug :string;
}
export interface game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms: {platform : Platform}[];
    metacritic: number;
    rating_top:number;
    
  }


const useGames = (gameQuery : GameQuery) => 
  useData<game>('/games',{
    params :{
      genres : gameQuery.genre?.id , 
      platform : gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search : gameQuery.searchText,
    },
    }, 
    [gameQuery]
  );

export default useGames;