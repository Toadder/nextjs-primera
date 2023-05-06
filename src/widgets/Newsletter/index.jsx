import NewsletterContent from './NewsletterContent';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
	return (
		<div className='bg-tertiary xl:py-16 md:py-12 py-8'>
			<div className='container flex xl:flex-row flex-col justify-between items-center md:gap-8 gap-4'>
				<NewsletterContent />
				<NewsletterForm />
			</div>
		</div>
	);
};

export default Newsletter;
