import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from './queries';
import { CharacterData, CharacterVars } from './types';

const Character: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [selectedName, setSelectedName] = useState<string>('');

  const { loading, error, data } = useQuery<CharacterData, CharacterVars>(GET_CHARACTER, {
    variables: { name: selectedName },
    skip: !selectedName,
  });

  const handleSearch = () => {
    setSelectedName(name);
  };

  const renderCharacterDetails = () => {
    if (!data?.character) return null;

    const { character } = data;
    
    return (
        <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Name</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">{character.name}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Birth Year</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">{character.birthYear}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Height</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">{character.height}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Homeworld</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">
                            <p>Name: {character.homeworld.name}</p>
                            <p>Climate: {character.homeworld.climate}</p>
                            <p>Terrain: {character.homeworld.terrain}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Films</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">
                            <ul>
                                {character.films.map((film) => (
                                    <li key={film.title}>{film.title} (Episode {film.episodeID})</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Vehicles</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">
                            <ul>
                                {character.vehicles.length ? character.vehicles.map((vehicle) => (
                                    <li key={vehicle.name}>
                                        {vehicle.name} - {vehicle.model} ({vehicle.class}), Cost: {vehicle.cost ?? 'Unknown'}
                                    </li>
                                )) : <p className='text-red-700'>Data Not Found</p>}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-left">Starships</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left">
                            <ul>
                                {character.starships.length ? character.starships.map((starship) => (
                                    <li key={starship.name}>
                                        {starship.name} - {starship.model} ({starship.class}), Cost: {starship.cost ?? 'Unknown'}
                                    </li>
                                )) : <p className='text-red-700'>Data Not Found</p>}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  };

  return (
    <div className="p-4">
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search character"
            className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2">Search</button>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && renderCharacterDetails()}
    </div>
  );
};

export default Character;
