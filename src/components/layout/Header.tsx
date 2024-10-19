import { Button } from '@/components/ui/button';

export default function Header() {
	return (
		<nav className='flex justify-between items-center space-x-4 p-4 border-b'>
			<div className='flex space-x-4'>
				<a
					href='/'
					className='text-sm font-medium hover:text-primary'
				>
					Home
				</a>
				<a
					href='/programs'
					className='text-sm font-medium hover:text-primary'
				>
					Programs
				</a>
				<a
					href='/initiatives'
					className='text-sm font-medium hover:text-primary'
				>
					Initiatives
				</a>
				<a
					href='/news'
					className='text-sm font-medium hover:text-primary'
				>
					News
				</a>
				<a
					href='/about-us'
					className='text-sm font-medium hover:text-primary'
				>
					About us
				</a>
				<a
					href='/contact-us'
					className='text-sm font-medium hover:text-primary'
				>
					Contact
				</a>
			</div>
			<div className='flex items-center space-x-4'>
				<select className='text-sm border rounded-md px-2 py-1'>
					<option>Language</option>
				</select>
				<Button className='bg-purple-600 text-white'>
					Get Started
				</Button>
			</div>
		</nav>
	);
}
