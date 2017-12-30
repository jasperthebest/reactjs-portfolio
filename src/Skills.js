import React from 'react';

class Skills extends React.Component {
	render() {
		const front = this.props.front.map((single, i) => {
			return <li key={i} data-animated="fadeInUp">{single}</li>;
		});
		const back = this.props.back.map((single, i) => {
			return <li key={i} data-animated="fadeInUp">{single}</li>;
		});
		const use = this.props.use.map((single, i) => {
			return <li key={i} data-animated="fadeInUp">{single}</li>;
		});
		return (
		   <div className="thirdblock">
		   <div>
		   <div>
		   <h3 data-animated="fadeInUp">Front End Skills</h3>
		   <ul>{front}</ul>
		   </div>
		   </div>
		   <div>
		   <div>
		   <h3 data-animated="fadeInUp">Back End Skills</h3>
		   <ul>{back}</ul>
		   <h3 data-animated="fadeInUp">What I Use</h3>
		   <ul>{use}</ul>
		   </div>
		   </div>
		   </div>
		);
	}
}

export default Skills;