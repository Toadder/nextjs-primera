export const constants = {
	phoneNumber: '+52 984 228 3597',
	email: 'primerapropertiesmx@gmail.com',
	address: 'Plaza Palmeiras, C. 11 Sur, Ejidal, 77712 Playa del Carmen, Q.R.',
	workingTime: "10:00 - 22:00"
};

export const navLinks = [
	{
		id: 1,
		name: 'About Us',
		path: '/about-us',
	},
	{
		id: 2,
		name: 'Listings',
		path: '/listings',
	},
	{
		id: 3,
		name: 'Contact',
		path: '/contact',
	},
];

export const cities = [
	{
		id: 1,
		name: 'Tulum',
		path: '/',
		img: '/home/cities/tulumImg.jpg',
	},
	{
		id: 2,
		name: 'Playa Del Carmen',
		path: '/',
		img: '/home/cities/playaImg.jpg',
	},
	{
		id: 3,
		name: 'Cancun',
		path: '/',
		img: '/home/cities/cancunImg.jpg',
	},
];

export const contacts = [
	{
		id: 1,
		icon: "/contact/contacts/01.png",
		iconSize: {
			width: 19, 
			height: 30,
		},
		title: "Plaza Palmeiras",
		content: [
			constants.address
		]
	},
	{
		id: 2,
		icon: "/contact/contacts/02.png",
		iconSize: {
			width: 25,
			height: 25,
		},
		title: "Whats App",
		content: [
			<a key={constants.phoneNumber} className='animated hover:opacity-70' href={`tel:${constants.phoneNumber}`}>{constants.phoneNumber}</a>,
			<a key={constants.email} className='animated hover:opacity-70' href={`mailto:${constants.email}`}>{constants.email}</a>
		]
	},
	{
		id: 3,
		icon: "/contact/contacts/03.png",
		iconSize: {
			width: 35, 
			height: 35,
		},
		title: "Hours of Operation",
		content: [
			constants.workingTime
		]
	},
]
