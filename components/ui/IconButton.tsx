import { cn } from '@/lib/utils';
import { MouseEventHandler } from 'react';

interface Props {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	icon: React.ReactElement;
	className?: string | undefined;
}

const IconButton: React.FC<Props> = ({ className, icon, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition active:scale-90', className)}
		>
			{icon}
		</button>
	);
};

export default IconButton;
