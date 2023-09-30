export default function setPrice(price: number) {
	const formatPrice = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});
	return formatPrice.format(price);
}
export function setDiscount(price: number, discountPercentage: number) {
	return price - (discountPercentage * price) / 100;
}
