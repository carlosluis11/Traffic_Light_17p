import React from "react";
import Pole from "../component/pole.jsx"
import TrafficLight from "../component/trafficlight.jsx";
//create your first component
const Home = () => {
	return (
		<div>
		<Pole/>
		<TrafficLight/>
		</div>
	);
};

export default Home;
