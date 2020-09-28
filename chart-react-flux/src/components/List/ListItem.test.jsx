import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ItemlList from './ListItem';

describe('ItemlList', () => {
	let container = null;
	{
		beforeEach(() => {
			container = document.createElement('div');
			document.body.appendChild(container);
		});
		afterEach(() => {
			unmountComponentAtNode(container);
			container.remove();
			container = null;
		});

		it('should button should show remove off the cart text when state is true', () => {
			// ARRANGE
			const classText = 'item__button item__button--on-chart';
			const product = {
				description: 'bombasto',
				img: 'img.com',
				price: 13
			};
			// ACT
			act(() => {
				render(<ItemlList product={product} />, container);
			});
			const button = document.querySelector('[data-testid="toggle"]');

			act(() => {
				button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			});
			// ASERTS

			expect(button.className).toBe(classText);
		});
	}
});
