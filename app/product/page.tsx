import { type } from 'os';
import ProductCard from '../components/product/ProductCard';
import Link from 'next/link';
async function getProduct() {
	const res = fetch('https://dummyjson.com/products');
	if (!res) {
		throw new Error('failed to fetch data');
	}
	return (await res).json();
}
export type TProduct = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
};
export interface IProduct {
	products: Array<TProduct>;
	total: number;
	skip: number;
	limit: number;
}

export default async function Page() {
	const product: IProduct = await getProduct();
	console.info(product);
	return (
		<main>
			Product
			<div className='flex justify-center gap-7 flex-wrap'>
				{product.products.map((productList) => (
					<Link
						href={`/product/${productList.id}`}
						key={productList.id}>
						<ProductCard {...productList} />
					</Link>
				))}
			</div>
		</main>
	);
}
