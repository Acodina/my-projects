import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _productList = [];
let _cartList = [];

class ProductList extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getProductList() {
		return _productList;
	}
	getCartList() {
		return _cartList;
	}
	getTotalPrice() {
		let value = _cartList.reduce((acumulator, actualItem) => {
			return (acumulator += actualItem.price);
		}, 0);
		return value.toFixed(2);
	}
}

const productList = new ProductList();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_PRODUT_LIST:
			_productList = action.data;
			productList.emitChange();
			break;
		case actionTypes.UPLOAD_CART:
			const checker = _cartList.some((actualItem) => {
				return actualItem === action.data;
			});
			if (checker) {
				_cartList = _cartList.filter((actualItem) => {
					return actualItem !== action.data;
				});
			} else {
				_cartList = [..._cartList, action.data];
			}
			productList.emitChange();
			break;
		default:
			break;
	}
});

export default productList;
