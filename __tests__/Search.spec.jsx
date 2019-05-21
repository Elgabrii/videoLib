import React from "react";
// import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Search from "../js/Search";

test("Search renders correctly", () => {
	// const component = renderer.create(<Search />);
	const component = shallow(<Search />);
	// const tree = component.toJSON();
	expect(component).toMatchSnapshot();
});
