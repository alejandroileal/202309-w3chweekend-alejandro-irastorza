import { Component } from './component';

export class List extends Component {
  cards: Cards[];
  constructor(selector: string, cards: Cards[]) {
    super(selector);
    this.cards = cards;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    // const cards = new Card()
  }

  createTemplate() {
    return `<ul></ul>`;
  }
}
