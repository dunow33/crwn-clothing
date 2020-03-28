import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => {
	render() {
		const { collections } = this.state;

		return (<div className='shop-page'>
				{
					collections.map(({id, ...otherCollectionProps }) => (
						<CollectionPreview key={ id } { ...otherCollectionProps }/>
					))
				}
			</div>);
		}

}

export default ShopPage;