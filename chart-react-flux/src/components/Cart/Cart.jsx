import React, { useState, useEffect } from 'react';
import productStore from '../../stores/productStore';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function Cart() {
	const [cartList, setCartList] = useState(productStore.getCartList());
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		productStore.addChangeListener(onChange);
		return () => productStore.removeChangeListener(onChange);
	}, [cartList.length]);

	const onChange = () => {
		setCartList(productStore.getCartList());
		setCartTotal(productStore.getTotalPrice());
	};

	return (
		<div data-testid="flex-column" className="cart">
			<h1>MI CESTA:</h1>
			{cartList.map((product) => {
				return <CartItem product={product} />;
			})}
			<CartTotal total={cartTotal} cartList={cartList} />
		</div>
	);
}

export default Cart;
