'use client';
import { TProduct } from '@/app/product/page';
import React from 'react';

export default function DetailCard({ title, description }: TProduct) {
	const [isActive, setActive] = React.useState(false);
	const handleActive = () => {
		setActive((prev) => !prev);
		console.info(isActive);
	};
	return (
		<section className='sm:w-[586px] border-solid border-[2px] border-gray-300 p-4 flex flex-col gap-2 box-content'>
			<h1 className='capitalize text-3xl font-bold text-gray-500'>
				{title}
			</h1>
			<div className='flex flex-row gap-2'>
				{Array.from({ length: 3 }).map((_, index) => (
					<div
						key={index}
						className='border-solid border-[1px] border-gray-200 box-content flex-row flex p-3 items-center gap-2'>
						<div className='h-3 w-3 rounded-full bg-black p-2'></div>
						<h5 className='text-xs'>space gray</h5>
					</div>
				))}
			</div>
			<div className='flex flex-row gap-4 '>
				<button
					className='uppercase font-medium text-xs flex flex-col justify-center'
					onClick={handleActive}>
					<h2>deskripsi</h2>
					{!isActive ? (
						<span className='w-full h-[2px] bg-black block' />
					) : null}
				</button>
				<button
					className='uppercase font-medium text-xs flex flex-col justify-center'
					onClick={handleActive}>
					<h2>spesifikasi</h2>
					{isActive ? (
						<span className='w-full h-[2px] bg-black block' />
					) : null}
				</button>
			</div>
			<div className='text-xs'>
				{!isActive ? (
					<p>{description}</p>
				) : (
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Dicta corporis ipsa odio earum magni enim dolorem
						veritatis? At, ducimus autem dolor obcaecati
						consequuntur qui pariatur similique debitis error id
						ipsa.
					</p>
				)}
			</div>
		</section>
	);
}
