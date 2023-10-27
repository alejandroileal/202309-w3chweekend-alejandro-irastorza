import { Component } from './component';

export class Card extends Component {
  cards: Cards[];

  constructor(selector: string, cards: Cards[]) {
    super(selector);
    this.cards = cards;
  }

  createTemplate() {}
}
