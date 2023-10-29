import { Card } from '../../types';

export class ApiRepo {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  async getPokemos(): Promise<Card[]> {
    const response = await fetch(this.apiUrl);

    if (!response.ok) {
      throw new Error(response.status + ' ' + response.statusText);
    }

    const repoData = await response.json();

    return repoData.results;
  }
}

export let cardCounter: Index;

cardCounter = 1;
