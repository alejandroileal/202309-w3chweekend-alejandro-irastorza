import { Card } from '../types';
import { Cards } from './card';
import { Component } from './component';
import { ApiRepo } from './repo/api.repo';

export class List extends Component {
	repo: ApiRepo;
	pokemons: Card[];
	constructor(selector: string) {
		super(selector);
		this.repo = new ApiRepo();
		this.pokemons = [];
		this.loadPokemons();
	}

	async loadPokemons() {
		try {
			this.pokemons = await this.repo.getPokemos();
			console.log('RepoResponse:');
			console.log(this.pokemons);
			this.render();
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		this.template = this.createTemplate();
		super.render();
		console.log(this.pokemons);
		new Cards('.list', this.pokemons);
		// This.pokemons.map((pokemon) => new Cards('.list', pokemon));
	}

	createTemplate() {
		return `
    <div class="list-container">
    <ul class="list">
    </ul>
    </div>`;
	}
}
