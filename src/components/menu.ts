import { MenuOption } from '../types';
import { Component } from './component';

export class Menu extends Component {
  options: MenuOption[];
  constructor(selector: string, options: MenuOption[]) {
    super(selector);
    this.options = options;
    console.log(this.options);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    let list = `<nav><ul>`;
    list += this.options
      .map((option) => `<li><a href="${option.path}">${option.label}</li>`)
      .join('');
    list += `</nav></ul>`;
    return list;
  }
}
