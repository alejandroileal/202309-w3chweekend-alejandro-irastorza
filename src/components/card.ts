import { Component } from './component';

export class Card extends Component {
  cards: Card[];

  constructor(selector: string, cards: Card[]) {
    super(selector);
    this.cards = cards;
  }

  createTemplate() {
    return `<li class="pokemon">
        <img src="./" alt="">
        <h2>Pokemon name</h2>
        <a href="./" class="button previous-button">Previous</a>
        <a href="./ class="button next-button">Next</a>
      </li>`;
  }
}
