import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Card from "./Card"
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row d-flex justify-content-between gap-3">
					<Card name="I Love HTML5"/>
					<Card name="I Love CSS3"/>
					<Card name="I Love JS"/>
					<Card name="I Love React JS"/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
