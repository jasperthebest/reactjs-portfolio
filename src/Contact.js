import React from 'react';

class Contact extends React.Component {
	render() {
		return(
		   <div className="contactMe">
		   <div>
		   <h3 className="bgblackAnimate">Do you speak Na’vi? It's ok if you don't, I speak English too.</h3>
		   <p data-animated="fadeInUp">Write a email...</p>
		   <ul>
		   <li data-animated="fadeInUp"><i className="fa fa-envelope" aria-hidden="true"></i><a rel="noopener noreferrer" href="mailto:jasper.koilraj@yahoo.com">jasper.koilraj@yahoo.com</a></li>
		   </ul>
		   <p data-animated="fadeInUp">Connect with me...</p>
		   <ul>
		   <li data-animated="fadeInUp"><i className="fa fa-facebook" aria-hidden="true"></i><a rel="noopener noreferrer" href="https://www.facebook.com/jasperkoilraj" target="_blank">@jasperkoilraj</a></li>
		   <li data-animated="fadeInUp"><i className="fa fa-twitter" aria-hidden="true"></i><a rel="noopener noreferrer" href="https://twitter.com/jasperkoilraj" target="_blank">@jasperkoilraj</a></li>
		   <li data-animated="fadeInUp"><i className="fa fa-linkedin" aria-hidden="true"></i><a rel="noopener noreferrer" href="https://www.linkedin.com/in/jasperkoilraj" target="_blank">@jasperkoilraj</a></li>
		   </ul>
		   </div>
		   </div>
		);
	}
}

export default Contact;