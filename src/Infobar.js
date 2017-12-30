import React from 'react';

class Infobar extends React.Component {
	render() {
		return(
		   <div className="blockQuote">
		   <div className="container">
		   <p>{this.props.info}</p>
		   </div>
		   </div>
		);
	}
}
export default Infobar;