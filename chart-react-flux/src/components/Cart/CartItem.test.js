import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CartItem from './CartItem';

describe('CartItem', () => {
	let container = null;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
	it('should return CartItem of products', () => {
		const product = {
			img: 'bombasto',
			description: 'best hero',
			price: 10000000
		};

		const priceOutPut = '10000000 €';
		act(() => {
			render(<CartItem product={product} />, container);
		});
		expect(
			document.querySelector('[data-testid="cartItem"]').textContent
		).toEqual(priceOutPut);
	});
});
