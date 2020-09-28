import productStore from './productStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

describe('ProductStore', () => {
	let action;
	let callbackMockFunction;
	let List;
	let product = { name: 'bombasto', price: 13 };

	beforeEach(() => {
		List = [{}];
		callbackMockFunction = jest.fn();
		productStore.addChangeListener(callbackMockFunction);
		action = {
			type: actionTypes.LOAD_PRODUT_LIST,
			data: List
		};
		dispatcher.dispatch(action);
	});
	afterEach(() => {
		productStore.removeChangeListener(callbackMockFunction);
	});
	it(' should create', () => {
		expect(productStore).toBeDefined();
	});
	it('should return the product list', () => {
		expect(productStore.getProductList()).toEqual(List);
	});
	it('should return the cart list with the produt if the cart is empty', () => {
		action = {
			type: actionTypes.UPLOAD_CART,
			data: product
		};
		dispatcher.dispatch(action);
		expect(productStore.getCartList()[0]).toEqual(product);
	});
	it('should return the cart list with the product has already inside', () => {
		action = {
			type: actionTypes.UPLOAD_CART,
			data: product
		};
		dispatcher.dispatch(action);
		expect(productStore.getCartList().length).toEqual(0);
	});
	it('should return the cart list with the product has already inside', () => {
		action = {
			type: actionTypes.UPLOAD_CART,
			data: product
		};
		dispatcher.dispatch(action);
		const price = 13;
		expect(productStore.getTotalPrice()).toEqual(price.toFixed(2));
	});
	it('should return undefined with wrong action type', () => {
		action = {
			type: 'Load-pachachos',
			data: []
		};
		dispatcher.dispatch(action);
		expect(productStore).toBe.truthy;
	});
});
