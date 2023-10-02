'use client';
import { TProduct } from '@/app/type';
import setPrice, { setDiscount } from '@/app/utils/setPrice';
import React from 'react';

export default function OrderCard({ price, discountPercentage }: TProduct) {
	const [cart, setCart] = React.useState(1);

	return (
		<section className='sm:w-[310px] h-[240px] border-solid border-[2px] border-gray-300 flex flex-col p-5 gap-2 justify-center relative box-border'>
			<div className='bg-black absolute top-0 right-0 p-2 text-white text-xs flex'>
				{discountPercentage}%
			</div>
			<h1 className='text-2xl font-bold text-gray-500 text-center'>
				{setPrice(setDiscount(cart * price, discountPercentage))}
			</h1>
			<h2 className='text-rose-600 line-through text-sm text-center'>
				{setPrice(price * cart)}
			</h2>
			<div className='flex flex-row justify-between items-center'>
				<button
					onClick={() =>
						setCart((prev) => (prev === 0 ? 0 : (prev -= 1)))
					}
					className='text-2xl m-2'>
					-
				</button>
				<h1>{cart}</h1>
				<button
					onClick={() => setCart((prev) => (prev += 1))}
					className='text-2xl m-2'>
					+
				</button>
			</div>
			<button className='p-2 bg-black text-white capitalize'>
				order via whatsapp
			</button>
		</section>
	);
}
