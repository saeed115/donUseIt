import { create } from 'apisauce';

const client = create({
	// baseURL: 'http://c0cd-41-95-57-176.ngrok.io',
	baseURL: 'https://my-json-server.typicode.com/saeed115/googo',
});

const endPoint = '/listing';

const getListing = () => client.get(endPoint);

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
	return client.post(endPoint, data);
};

export default {
	getListing,
	addListing,
};
