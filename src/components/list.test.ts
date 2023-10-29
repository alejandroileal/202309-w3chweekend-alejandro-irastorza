import { ApiRepo } from './repo/api.repo';

jest.mock('../data/repo');

ApiRepo.prototype.getPokemos = jest.fn();

describe('Given List component', () => {
	(getPokemos() as jest.Mock).mockReturnValue([{}]);
	describe('When we instantiate', () => {
		document.body.innerHTML = '<div></div>';
		const list = new List('div');
		test('Then it should be instance of List', () => {
			expect(list).toBeInstanceOf(List);
		});

		test('It should be in the document', () => {
			const element = screen.getByRole('list');
			expect(element).toBeInTheDocument();
		});
	});
});
