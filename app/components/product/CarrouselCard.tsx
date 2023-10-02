import { TProduct } from '@/app/type';

export default function CarrouselCard({
	thumbnail,
	images,
	title,
	brand,
	category,
	description,
}: TProduct) {
	return (
		<section className='flex flex-col gap-2 items-center'>
			<img
				src={thumbnail}
				alt=''
				className='h-[350px] w-[387px] object-contain'
			/>
			<div
				className='flex
			flex-row gap-1'>
				{images.map((_, index) => (
					<div
						className='h-2 w-2 bg-black rounded-full visible'
						key={index}
					/>
				))}
			</div>
			<div className='flex gap-2 overflow-hidden'>
				{images.map((imageList, index) => (
					<img
						src={imageList}
						alt={`${title} | ${brand} | ${category} | ${description}`}
						className='h-[60px] w-[60px] object-contain border-[2px] border-solid border-gray-300'
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
