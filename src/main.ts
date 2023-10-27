import { Header } from './components/header';
import { Menu } from './components/menu';
import { MenuOption } from './types';

console.log('Loaded Main 😺');

const menu: MenuOption[] = [
  { label: 'Pokemons', path: 'index.html' },
  { label: 'My Pokemons', path: 'library.html' },
];
const renderizedContent = [new Header('#app', menu)];
