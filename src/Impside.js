import React from 'react';

class Impside extends React.Component {
	render() {
		const front = this.props.datashow[0].front.map((single, i) => {
			return <li key={i} data-animated="fadeInUp">{single}</li>;
		});
		const back = this.props.datashow[0].back.map((single, i) => {
			return <li key={i} data-animated="fadeInUp">{single}</li>;
		});
		return(
		   <div className={(this.props.classchose? "sideWay changePart" : "sideWay")}>
		   <div className="coverBG" style={{backgroundImage: "url(" + this.props.datashow[0].imgurl + ")", backgroundSize: "cover"}}>
		   <img src={this.props.datashow[0].imgurl} alt={this.props.datashow[0].title}/>
		   </div>
		   <div>
		   <div>
		   <h2 data-animated="fadeInUp">{this.props.datashow[0].title}</h2>
		   <p data-animated="fadeInUp">{this.props.datashow[0].desc}</p>
		   <div className="twowayJoint">
		   <div>
		   <h4 data-animated="fadeInUp">Front End</h4>
		   <ul>{front}</ul>
		   </div>
		   <div>
		   <h4 data-animated="fadeInUp">Back End</h4>
		   <ul>{back}</ul>
		   </div>
		   </div>
		   <a data-animated="fadeInUp" target="_blank" href={this.props.datashow[0].url} rel="noopener noreferrer" className="btn primary">Visit Site</a>
		   </div>
		   </div>
		   </div>
		);
	}
}

export default Impside;