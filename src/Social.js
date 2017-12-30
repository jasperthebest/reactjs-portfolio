import React from 'react';

class Social extends React.Component {
	render() {
		return(
		   <div className="singleProject coverBG" style={{backgroundImage: "url(images/ballonBG.jpg)", backgroundSize: "cover"}}>
		   <div className="causeBox">
		   <div>
		   <div>
		   <h2 data-animated="fadeInUp">Uyirkkural</h2>
		   <p data-animated="fadeInUp">I had developed Front end for Uyirkkural which translates as ‘Voice of Life’ is the voice of a community answering the call to build a Culture of Life. We are a non profit that firmly believes in the participation through direct human efforts, time and spiritual involvement.</p>
		   <a data-animated="fadeInUp" target="_blank" href="http://www.uyirkkural.com/" className="btn primary" rel="noopener noreferrer">Visit Site</a>
		   </div>
		   </div>
		   </div>
		   </div>
		);
	}
}

export default Social;