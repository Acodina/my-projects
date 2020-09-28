import React from 'react';

function CartTotal({ total, cartList }) {
	return (
		<div className="cart__total flex-row">
			<strong>TOTAL</strong> ({cartList.length} productos){' '}
			<span data-testid="CartTotal">{total}</span> €
		</div>
	);
}

export default CartTotal;
