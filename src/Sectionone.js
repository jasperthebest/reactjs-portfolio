import React from 'react';

class Sectionone extends React.Component {
	render() {
		return (
		   <div className="firstblock">
		   <div className="homeContent">
		   <div>
		   <img src="images/profile.jpg" alt="Jasper Koilraj" width="80" height="80"/>
		   <h1 data-animated="fadeInUp" className="animated fadeInUp"><div>J</div><span>a</span><span>s</span><span>p</span><span>e</span><span>r</span> <div>K</div><span>o</span><span>i</span><span>l</span><span>r</span><span>a</span><span>j</span></h1>
		   <h4 data-animated="fadeInUp">ReactJS Front End Engineer</h4>
		   <h5 data-animated="fadeInUp">3 Years of Experience</h5>
		   <ul>
		      <li><a href="mailto:jasper.koilraj@yahoo.com" rel="noopener noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
		      <li><a href="https://www.facebook.com/jasperkoilraj" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
		      <li><a href="https://www.linkedin.com/in/jasperkoilraj/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
		   </ul>
		   </div>
		   </div>
		   </div>
		);
	}
}
export default Sectionone;