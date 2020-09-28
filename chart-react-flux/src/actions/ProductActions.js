import actionTypes from './actionTypes';
import ProductList from '../mocks/products';
import dispatcher from '../dispatcher';

export async function getProductList() {
	let response = await fetch('/');
	response = ProductList;
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUT_LIST,
		data: response
	});
}

export function uploadCart(product) {
	dispatcher.dispatch({
		type: actionTypes.UPLOAD_CART,
		data: product
	});
}
