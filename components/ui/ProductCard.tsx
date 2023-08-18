'use client';

import { Product } from '@/types';

interface Props {
	data: Product;
}

const ProductCard: React.FC<Props> = ({ data }) => {
	return <div className='bg-white group cursor-pointer rounded-xl'>ProductCard</div>;
};

export default ProductCard;
