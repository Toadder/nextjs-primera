import { useRouter } from 'next/router';
import { items } from '@/src/constants/constants';

const Item = () => {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return (
		<div>{id}</div>
	)
}

export default Item