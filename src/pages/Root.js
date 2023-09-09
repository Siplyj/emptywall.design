import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import ContactFormLayout from '../components/Contacts/ContactFormLayout';

function RootLayout() {

	const [contactFormIsShown, setContactFormIsShown] = useState(false);

	const htmlElement = document.querySelector('html');

	const showContactFormHandler = () => {
		setContactFormIsShown(true);
		htmlElement.classList.add('no-scroll');
	};

	const hideContactFormHandler = () => {
		setContactFormIsShown(false);
		htmlElement.classList.remove('no-scroll');
	};

	return (
		<>
			{contactFormIsShown && <ContactFormLayout onClose={hideContactFormHandler} />}
			<main>
				<MainNavigation />
				<Outlet context={[showContactFormHandler, hideContactFormHandler]} />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;