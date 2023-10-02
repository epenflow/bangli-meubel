import DetailCard from '@/app/components/product/DetailCard';

import OrderCard from '@/app/components/product/OrderCard';
import setPrice, { setDiscount } from '@/app/utils/setPrice';
import CarrouselCard from '@/app/components/product/CarrouselCard';
import { TProduct } from '@/app/type';

async function getDetailProduct(id: number) {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	if (!res) {
		throw new Error('failed to fetch data');
	}
	return res.json();
}

export default async function DetailProduct({
	params,
}: {
	params: { id: number };
}) {
	const product: TProduct = await getDetailProduct(params.id);
	console.info(product.images);
	return (
		<main className='flex flex-col gap-3 items-center w-screen overflow-hidden box-border p-2'>
			<div className='flex justify-center gap-4 flex-col sm:flex-row p-2'>
				<CarrouselCard {...product} />
				<DetailCard {...product} />
				<OrderCard {...product} />
			</div>

			<div className='flex flex-wrap gap-5 justify-center'>
				{Array.from({ length: 5 }).map((_, index) => (
					<div
						key={index}
						className='aspect-video h-44 p-2 flex items-center justify-center relative border-solid border-[2px] border-gray-200'>
						<img
							src={product.thumbnail}
							alt=''
							className='object-contain h-32'
						/>
						<h1 className='absolute text-white capitalize font-bold top-0 left-0  bg-black p-2 text-xs line-clamp-2'>
							{product.title}
							<br />
							{setPrice(
								setDiscount(
									product.price,
									product.discountPercentage
								)
							)}
						</h1>
					</div>
				))}
			</div>
		</main>
	);
}
