import { TProduct } from '../../product/page';
import setPrice, { setDiscount } from '../../utils/setPrice';
export default function ProductCard({
	brand,
	category,
	description,
	discountPercentage,
	id,
	images,
	price,
	rating,
	stock,
	thumbnail,
	title,
}: TProduct) {
	return (
		<div className='h-[362px] w-[310px] border-[2px] border-solid border-gray-200 flex justify-center items-center flex-col p-3 gap-1 box-border relative'>
			{discountPercentage ? (
				<div className='absolute bg-black h-10 w-20 text-center text-white p-3 top-0 right-0 flex justify-center items-center text-sm'>
					{discountPercentage}%
				</div>
			) : null}
			<img
				src={thumbnail}
				className='h-44 w-44 object-contain'
				alt={`${title}| ${category} | ${description} | Rp. ${price}`}
			/>
			<h1 className='line-clamp-2 text-xs font-medium text-center'>
				{title}
			</h1>

			<h3 className='text-gray-300 line-through text-xs '>
				{setPrice(price)}
			</h3>
			<h3 className='text-rose-600 text-xs'>
				{setPrice(setDiscount(price, discountPercentage))}
			</h3>
		</div>
	);
}
