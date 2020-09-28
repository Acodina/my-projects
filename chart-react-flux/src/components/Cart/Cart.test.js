import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Cart from './Cart';

describe('Cart', () => {
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
	it('should return Cart of products', () => {
		act(() => {
			render(<Cart />, container);
		});
		expect(!!container.textContent).toEqual(true);
	});
});
