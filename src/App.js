import React, { Component } from 'react';
import Partone from './Sectionone.js';
import Parttwo from './Sectiontwo.js';
import Infobar from './Infobar.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';
import Social from './Social.js';
import Impside from './Impside.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
  	const frontskill = ['ReactJS', 'React Router V4', 'Javascript', 'ES6 & ES7 Script', 'SASS / SCSS', 'CSS', 'HTML', 'jQuery', 'Responsive Webpages', 'Fetch / AJAX', 'SVG', 'Create React App', 'Grunt', 'Webpack', 'Canvas', 'JSON', 'Bootstrap'];
  	const backskill = ['PHP', 'MySQL', 'Codeigniter', 'Wordpress Theme Development', 'Third Party API Integration', 'Payment Gateway Integration'];
  	const useskill = ['Github', 'Google Analytics', 'Google Webmaster', 'Domain Configuration with server', 'Sublime Text Editor', 'Adobe Photoshop', 'Adobe Illustrator', 'MS Office'];
  	const portfolio = [{'title': 'Coralinfikids', 'desc': 'A website for Playschool', 'url': 'http://coralinfikids.com/', 'imgurl': 'images/portfolio11.jpg'}, {'title': 'Metac', 'desc': 'A website for Real Estate Company', 'url': 'http://www.metacuae.com/', 'imgurl': 'images/portfolio14.jpg'}, {'title': 'Infinity Travels', 'desc': 'A website for Air Tickets Booking', 'url': 'http://www.infinitytravel.ae/', 'imgurl': 'images/portfolio4.jpg'}, {'title': 'Travel Treasures', 'desc': 'A website for Flight Booking', 'url': 'http://www.treasurestt.com/', 'imgurl': 'images/portfolio5.jpg'}, {'title': 'Voll Supermarket', 'desc': 'A website for Supermarket', 'url': 'http://www.vollsupermarket.com/', 'imgurl': 'images/portfolio6.jpg'}, {'title': 'World in my Coffee Cup', 'desc': 'A website for Travel Blogger', 'url': 'http://worldinmycoffeecup.com/', 'imgurl': 'images/portfolio7.jpg'}, {'title': 'Nippon Paint', 'desc': 'A website for Paint Company', 'url': 'http://www.nipponpaint.co.in/', 'imgurl': 'images/portfolio8.jpg'}, {'title': 'Metech', 'desc': 'A website for Technology Company', 'url': 'http://www.metech.com/', 'imgurl': 'images/portfolio9.jpg'}, {'title': 'Gromaxx', 'desc': 'A website for Hotel', 'url': 'http://www.gromaxx.ae/', 'imgurl': 'images/portfolio10.jpg'}, {'title': 'Vurve', 'desc': 'A website for Salon', 'url': 'http://www.vurvesalon.com/', 'imgurl': 'images/portfolio21.jpg'}];
    const yummy = [{'title': 'Yummy Seeds', 'desc': 'Yummy Seeds will change the course of UX and UI for E-Commerce. It completely focused on simplicity and user easy buy process. This takes to new level and futuristic to E-Commerce Platform. I created it in single hand by doing both Front and Back End Development. Below listed are used to make Yummy Seeds.', 'url': 'http://www.yummyseeds.com/', 'imgurl' : 'images/yummyseeds.jpg', 'front' : ['HTML5', 'CSS', 'jQuery', 'SASS', 'JSON', 'Grunt', 'FontAwesome'], 'back': ['PHP', 'MySQL']}];
    const star = [{'title': 'Star1hash', 'desc': 'This site shows best example of How much I have knowledge in designing and develop both Front and Back end. Also integrated CCAveneue Payment Gateway with Star1hash to get pay from Customer. No E-Commerce platform was used like Magento. Everything has been created from scratch. Below listed are used to make Star1hash.', 'url': 'http://www.star1hash.com/', 'imgurl' : 'images/star1hash2.jpg', 'front' : ['HTML5', 'CSS', 'jQuery', 'SASS', 'Grunt', 'FontAwesome'], 'back': ['Codeigniter PHP Frameowrk', 'MySQL']}];
    return (
      <div className="App">
        <Partone/>
        <Parttwo/>
        <Infobar info="I live in Caniuse.com where I learn about Browser Compatibility"/>
        <Skills front={frontskill} back={backskill} use={useskill} />
        <Infobar info="I prefer CSS Flexbox and Grid for layout rather than CSS Framework"/>
        <Portfolio portfolio={portfolio} />
        <Infobar info="A Website for Non profit Organization"/>
        <Social/>
        <Infobar info="I Designed. I Developed. I Integrated Payment. New Futuristic E-Commerce"/>
        <Impside classchose={false} datashow={yummy}/>
        <Infobar info="Designed and Developed both Front &amp; Back End for E-Commerce Site"/>
        <Impside classchose={true} datashow={star}/>
        <Infobar info="This site build using REACT Javascript Framework"/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
