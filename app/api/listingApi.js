import clientApi from './clientApi';

const endPoint = '/listings';

const getListing = () => clientApi.get(endPoint);

const addListing = (listing) => {
	const data = {
		title: listing.title,
		price: listing.price,
		categoryId: listing.category.value,
		description: listing.description,
		images: listing.images,
		location: listing.location,
	};

	return clientApi.post(endPoint, data);
};

export default {
	getListing,
	addListing,
};
