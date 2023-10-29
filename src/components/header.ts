import { MenuOption } from '../types';
import { Component } from './component';
import { Menu } from './menu';

export class Header extends Component {
  options: MenuOption[];
  constructor(selector: string, options: MenuOption[]) {
    super(selector);
    this.options = options;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    const elements = [new Menu('header', this.options)];
    console.log('Header', elements);
  }

  createTemplate() {
    return ` 
    <header>
    <h1>Pokemon Library</h1>
  </header>
    `;
  }
}
