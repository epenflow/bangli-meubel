'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TNavPath = {
	name: string;
	path: string;
};
const navPath: TNavPath[] = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'product',
		path: '/product',
	},
	{
		name: 'article',
		path: '/article',
	},
];

export default function Navbar() {
	const pathName = usePathname();
	return (
		<nav className='bg-black box-content flex justify-center items-center h-[50px]  text-xs text-gray-400 capitalize gap-2 sm:h-[80px] sm:text-base font-medium mb-3'>
			{navPath.map((pathList, index) => (
				<Link
					key={index}
					href={pathList.path}
					className={`${
						pathName === pathList.path ? 'text-white' : null
					}`}>
					{pathList.name}
				</Link>
			))}
		</nav>
	);
}
