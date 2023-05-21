import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Map = ({ iframe }) => {
	const videoRef = useRef(null);
	const inView = useInView(videoRef, { once: true });

	return (
		<div ref={videoRef} className='w-full h-full'>
			{inView && (
				<iframe
					className={`w-full h-full bg-tertiary`}
					src={iframe}
					style={{
						border: 0,
					}}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			)}
		</div>
	);
};

export default Map;
