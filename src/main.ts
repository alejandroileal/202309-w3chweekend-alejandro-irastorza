import { Header } from './components/header';
import { List } from './components/list';
import { ApiRepo } from './components/repo/api.repo';
import { Card, MenuOption } from './types';

console.log('Loaded Main 😺');

const menu: MenuOption[] = [
  { label: 'Library', path: 'index.html' },
  { label: 'My Pokemons', path: 'library.html' },
];

export const test: Card[] = [{ name: 'Sample Pokemon', url: 'pokemon.com' }];

const renderizedContent = [new Header('#app', menu), new List('#app')];

const poke = await new ApiRepo().getPokemos();

console.log(poke);
