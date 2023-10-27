import { Header } from './components/header';
import { ApiRepo } from './components/repo/api.repo';
import { MenuOption } from './types';

console.log('Loaded Main 😺');

const menu: MenuOption[] = [
  { label: 'Pokemons', path: 'index.html' },
  { label: 'My Pokemons', path: 'library.html' },
];
const renderizedContent = [new Header('#app', menu)];
console.log(renderizedContent);

console.log(new ApiRepo.);
