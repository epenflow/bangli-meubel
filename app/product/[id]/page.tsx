import DetailCard from '@/app/components/product/DetailCard';
import { IProduct, TProduct } from '../page';
import OrderCard from '@/app/components/product/OrderCard';
import setPrice, { setDiscount } from '@/app/utils/setPrice';

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
		<div className='flex flex-col gap-3'>
			<div className='flex justify-center gap-4 flex-col sm:flex-row p-2'>
				<section className='w-[384px] flex flex-col gap-2 items-center'>
					<img
						src={product.thumbnail}
						alt=''
						className='h-[350px] w-[387px] object-contain'
					/>
					<div className='flex gap-2'>
						{product.images.map((imageList, index) => (
							<img
								src={imageList}
								alt={`${product.title} | ${product.brand} | ${product.category} | ${product.description}`}
								className='h-[60px] w-[60px] object-contain border-[2px] border-solid border-gray-300'
								key={index}
							/>
						))}
					</div>
				</section>

				<DetailCard {...product} />
				<OrderCard {...product} />
			</div>

			<div className='flex flex-wrap gap-5 justify-center'>
				{Array.from({ length: 5 }).map((_, index) => (
					<div
						key={index}
						className='aspect-video h-40 p-2 flex items-center justify-center relative border-solid border-[2px] border-gray-200'>
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
		</div>
	);
}
