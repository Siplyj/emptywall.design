import ReactDOM from 'react-dom';

import ContactForm from './ContactForm';
import classes from './ContactFormLayout.module.css';

function Backdrop(props) {
	return <div className={classes.backdrop} onClick={props.onClose} />
};


const portalElement = document.querySelector('#overlays');

function ContactFormLayout (props) {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ContactForm onClose={props.onClose} />, portalElement)}
		</>
	);
};

export default ContactFormLayout;