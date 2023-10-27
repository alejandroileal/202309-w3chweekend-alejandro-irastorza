import { Card } from '../types';
import { Component } from './component';

export class List extends Component {
  cards: Card[];
  constructor(selector: string, cards: Card[]) {
    super(selector);
    this.cards = cards;
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    // Const cards = new Card()
  }

  createTemplate() {
    return `
    <div class="list-container">
    <ul class="list">
    </ul>
    </div>`;
  }
}
