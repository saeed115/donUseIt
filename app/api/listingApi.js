import { I18nManager } from 'react-native';
import clientApi from './clientApi';

const endPoint = I18nManager.isRTL ? '/listing-ar' : '/listing-en';

const getListing = () => clientApi.get(endPoint);

const addListing = (listing) => {
	const data = new FormData();

	data.append('title', listing.title);
	data.append('price', listing.price);
	data.append('description', listing.description);
	data.append('categoryId', listing.category.value);

	listing.images.forEach((image, index) => {
		data.append('images', {
			name: 'image' + index,
			type: 'image/jpeg',
			uri: image,
		});
	});

	if (listing.location) data.append('location', JSON.stringify(listing.location));

	console.log(data.price);
	return clientApi.post(endPoint, data);
};

export default {
	getListing,
	addListing,
};
