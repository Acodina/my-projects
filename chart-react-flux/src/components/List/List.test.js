import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import List from './List';

describe('List', () => {
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
	it('should return list of products', () => {
		act(() => {
			render(<List />, container);
		});
		expect(!!container.textContent).toEqual(false);
	});
});
