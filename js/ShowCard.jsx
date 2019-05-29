// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width:32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  oveflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: {
	poster: string,
	title: string,
	year: string,
	description: string
}) => (
	<Wrapper className="show-card">
		<Image
			src={`/public/img/posters/${props.poster}`}
			alt={`${props.title} Show Poster`}
		/>
		<div>
			<h3>{props.title}</h3>
			<h3>({props.year})</h3>
			<h3>{props.description}</h3>
		</div>
	</Wrapper>
);

export default ShowCard;
