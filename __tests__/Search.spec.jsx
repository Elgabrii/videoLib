import React from "react";
// import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Search from "../js/Search";
import ShowCard from "../js/ShowCard";
import preload from "../data.json";

test("Search renders correctly", () => {
	// const component = renderer.create(<Search />);
	const component = shallow(<Search />);
	// const tree = component.toJSON();
	expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
	const component = shallow(<Search />);
	expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test(
	"Search should render correct amount of shows based on search term",
	() => {
		const searchWord = "black";
		const component = shallow(<Search />);
		component.find("input").simulate("change", {
			target: { value: searchWord }
		});
		const showCount = preload.shows.filter(show =>
			`${show.title} ${show.description}`
				.toUpperCase()
				.indexOf(searchWord.toLocaleUpperCase()) >=0
		).length;
		expect(component.find(ShowCard).length).toEqual(showCount);
	}
);
