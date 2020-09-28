import React from 'react';

function CartItem({ product }) {
	return (
		<div className="cart__item flex-row hidden-in-small">
			<img className="item__img" src={product.img} alt="product"></img>
			{product.description}
			<span data-testid="cartItem">{product.price} €</span>
		</div>
	);
}

export default CartItem;
