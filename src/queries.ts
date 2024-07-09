import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
  query GetCharacter($name: String!) {
    character(name: $name) {
      name
      birthYear
      height
      homeworld {
        name
        climate
        terrain
      }
      films {
        title
        episodeID
      }
      vehicles {
        name
        model
        class
        cost
      }
      starships {
        name
        model
        class
        cost
      }
    }
  }
`;
