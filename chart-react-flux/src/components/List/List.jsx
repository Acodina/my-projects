import React, { useState, useEffect } from 'react';
import productStore from '../../stores/productStore';
import { getProductList } from '../../actions/ProductActions';
import ItemList from './ListItem';

function List() {
	const [productList, setProductList] = useState(productStore.getProductList());

	useEffect(() => {
		productStore.addChangeListener(onChange);

		if (productList.length === 0) {
			getProductList();
		}

		return () => productStore.removeChangeListener(onChange);
	}, [productList.length]);

	function onChange() {
		setProductList(productStore.getProductList());
	}

	return (
		<div data-testid="flex-column" className="list">
			{productList.map((product) => {
				return <ItemList product={product} key={`list-item-${product.id}`} />;
			})}
		</div>
	);
}

export default List;
