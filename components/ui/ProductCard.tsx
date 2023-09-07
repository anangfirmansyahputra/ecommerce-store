'use client';

import { Product } from '@/types';
import Image from 'next/image';
import IconButton from './IconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './Currency';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCartStore from '@/hooks/use-card';
import toast from 'react-hot-toast/headless';

interface Props {
	data: Product;
}

const ProductCard: React.FC<Props> = ({ data }) => {
	const router = useRouter();
	const previewModal = usePreviewModal()
	const cart = useCartStore()
	
	const onPreview: MouseEventHandler<HTMLButtonElement>  = (event) => {
		event.stopPropagation()

		previewModal.onOpen(data)
	}

	const onAddToCart: MouseEventHandler<HTMLButtonElement>  = (event) => {
		event.stopPropagation()

		cart.addItem(data)
	}



	return (
		<div
			onClick={() => router.push(`/product/${data?.id}`)}
			className='bg-white group cursor-pointer rounded-xl p-3 space-y-4 border'
		>
			<div className='aspect-square rounded-xl bg-gray-100 relative'>
				<Image
					src={data?.images?.[0]?.url}
					fill
					alt='image'
					className='object-cover aspect-square rounded-md'
				/>
				<div className='opacity-0 group-hover:opacity-100'>
					<div className='flex gap-x-6 justify-center transition absolute w-full px-6 bottom-5'>
						<IconButton
							onClick={onPreview}
							icon={
								<Expand
									size={20}
									className='text-gray-600'
								/>
							}
						/>
						<IconButton
							onClick={onAddToCart}
							icon={
								<ShoppingCart
									size={20}
									className='text-gray-600'
								/>
							}
						/>
					</div>
				</div>
			</div>
			<div>
				<p className='font-semibold text-lg'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category?.name}</p>
			</div>
			<div className='flex items-center justify-between'>
				<Currency value={data?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
