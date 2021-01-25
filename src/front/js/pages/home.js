import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/planetCard";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const listPlanets = store.planets.map((value, index) => {
		return (
			<div key={index} className="col-md-4">
				<PlanetCard data={value} />
			</div>
		);
	});

	//const listPeople;
	//const listVehicules;

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Launch demo modal
			</button>
			{/* Here is a list of planets */}
			<h1>Planets</h1>
			<div className="row">{listPlanets}</div>

			{/* Here is a list of people */}

			{/* Here is a list of vehicules */}
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
