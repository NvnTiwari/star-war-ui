export interface Film {
    title: string;
    episodeID: number;
  }
  
  export interface Vehicle {
    name: string;
    model: string;
    class: string;
    cost?: number;
  }
  
  export interface Starship {
    name: string;
    model: string;
    class: string;
    cost?: number;
  }
  
  export interface Homeworld {
    name: string;
    climate: string;
    terrain: string;
  }
  
  export interface Character {
    name: string;
    birthYear: string;
    height: string;
    homeworld: Homeworld;
    films: Film[];
    vehicles: Vehicle[];
    starships: Starship[];
  }
  
  export interface CharacterData {
    character: Character;
  }
  
  export interface CharacterVars {
    name: string;
  }
  