import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Portfolio extends React.Component {
	render() {
		const portlist = this.props.portfolio.map((single, i)=>{
			
		return (<div key={i} data-animated="scaleUp">
		   <div className="coverBG" style={{backgroundImage : "url(" + single.imgurl + ")", backgroundSize : "cover"}}>
		   <a href={single.url} target="_blank" rel="noopener noreferrer">
		   <div>
		   <h4>{single.title}</h4>
		   <p>{single.desc}</p>
		   </div>
		   </a>
		   </div>
		   </div>);
		});
		return (
		   <div className="fourthblock">
		   <h2 className="text-center" data-animated="fadeInUp">Portfolio</h2>
		   <div className="gridLayout">
          	{portlist}
          </div>
		  </div>
		);
	}
}

export default Portfolio;