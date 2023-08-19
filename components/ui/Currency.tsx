import { useEffect, useState } from 'react';

export const formatter = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'IDR',
});

interface Props {
	value?: string | number;
}

const Currency: React.FC<Props> = ({ value }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
