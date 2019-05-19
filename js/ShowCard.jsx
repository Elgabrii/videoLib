import React from "react";
import { shape, string } from "prop-types";

const ShowCard = props => (
	<div className="show-card">
		<img
			src={`/public/img/posters/${props.show.poster}`}
			alt={`${props.show.title} Show Poster`}
		/>
		<div>
			<h3>{props.show.title}</h3>
			<h3>({props.show.year})</h3>
			<h3>{props.show.description}</h3>
		</div>
	</div>
);

ShowCard.propTypes = {
	show: shape({
		poster: string.isRequired,
		title: string.isRequired,
		year: string.isRequired,
		description: string.isRequired
	}).isRequired
};

export default ShowCard;
