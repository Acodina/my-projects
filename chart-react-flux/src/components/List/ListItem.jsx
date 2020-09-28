import React, { useState } from 'react';
import { uploadCart } from '../../actions/ProductActions';

function ListItem({ product }) {
	const [state, setState] = useState(false);
	return (
		<div data-testid="itemList" className="item-list__item flex-row">
			<p>{product.description}</p>
			<span
				className={
					state === true
						? 'item__price item__price--on-chart'
						: 'item__price item__price--off-chart'
				}
			>
				{product.price} €
			</span>
			<button
				className={
					state === true
						? 'item__button item__button--on-chart'
						: 'item__button item__button--off-chart'
				}
				onClick={(event) => {
					event.preventDefault();
					setState((previousState) => !previousState);
					uploadCart(product);
				}}
				data-testid="toggle"
			></button>
		</div>
	);
}

export default ListItem;
