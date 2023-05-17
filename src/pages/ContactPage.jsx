import React from 'react'
import Hero from '../components/Hero'
import Contacts from '../components/Contacts'
import Map from '../components/common/Map'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
	return (
		<>
			<Hero imgUrl="/contact/hero/01.jpg" />
			<Contacts />
			<Map />
			<ContactForm />
		</>
	)
}

export default ContactPage