import { type } from 'os';
import ProductCard from '../components/product/ProductCard';
import Link from 'next/link';
import { IProduct } from '../type';
async function getProduct() {
	const res = fetch('https://dummyjson.com/products');
	if (!res) {
		throw new Error('failed to fetch data');
	}
	return (await res).json();
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
