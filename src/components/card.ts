import { Component } from './component';
import { Card } from '../types';

export class Cards extends Component {
	card: Card[];
	currentCard: number;
	constructor(selector: string, card: Card[]) {
		super(selector);
		this.card = card;
		this.currentCard = 0;
		console.log('Card List:');
		console.log(this.card);
		this.manageComponent();
	}

	nextCard() {
		if (this.currentCard === this.card.length - 1) {
			this.currentCard = 0;
			return;
		}

		this.currentCard++;
	}

	previousCard() {
		if (this.currentCard === 0) {
			this.currentCard = this.card.length - 1;
			return;
		}

		this.currentCard--;
	}

	handleNextButton = (event: Event) => {
		event.preventDefault();
		this.nextCard();
		this.clear();
		console.log(this.currentCard);
		this.template = this.createTemplate();
		this.render();
	};

	handlePrevioustButton = (event: Event) => {
		event.preventDefault();
		this.previousCard();
		this.clear();
		console.log(this.currentCard);
		this.template = this.createTemplate();
		this.render();
	};

	manageComponent() {
		this.template = this.createTemplate();
		this.render();
		console.log('Manage Component');
	}

	createTemplate() {
		return `<li class="pokemon">
		<h3>${this.currentCard + 1}/${this.card.length}</h3>
    <div class="card-image-container">
        <img src="./${this.card[this.currentCard].name}.gif">
        </div>
        <div class="bottom-card">
        <h2>${this.card[this.currentCard].name.toUpperCase()}</h2>
        <a class="details" href="./">Click here to see more details...</a>
  <div class="button-container">
        <a class="button previous-button">Previous</a>
        <a href="./" class="button next-button">Next</a>
      </div>
      </div>
      </li>`;
	}

	render() {
		super.render();
		const domNextButton = document.querySelector('.next-button');
		const domPreviousButton = document.querySelector('.previous-button');
		domNextButton?.addEventListener('click', this.handleNextButton.bind(this));
		domPreviousButton?.addEventListener(
			'click',
			this.handlePrevioustButton.bind(this)
		);
	}
}
