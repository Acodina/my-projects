import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CartTotal from './CartTotal';

describe('CartTotal', () => {
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
	it('should return CartTotal of products', () => {
		const product = {
			img: 'bombasto',
			description: 'best hero',
			price: 10000000
		};

		const total = '13';

		act(() => {
			render(<CartTotal total={total} cartList={product} />, container);
		});
		expect(
			document.querySelector('[data-testid="CartTotal"]').textContent
		).toEqual(total);
	});
});
