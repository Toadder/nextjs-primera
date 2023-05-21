import ContactForm from '../components/ContactForm';
import Contacts from '../components/Contacts';
import Hero from '../components/Hero';
import MapSection from '../components/MapSection';

const ContactPage = () => {
	return (
		<>
			<Hero imgUrl='/contact/hero/01.jpg' />
			<Contacts />
			<MapSection />
			<ContactForm />
		</>
	);
};

export default ContactPage;
