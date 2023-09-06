'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const formatter = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'IDR',
});

interface Props {
	value?: string | number;
	className?: string;
}

const Currency: React.FC<Props> = ({ value, className }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return <div className={cn('font-semibold', className)}>{formatter.format(Number(value))}</div>;
};

export default Currency;
