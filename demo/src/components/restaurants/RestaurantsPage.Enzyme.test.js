import React from 'react';
import expect from 'expect';
import {mount, shallow, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import RestaurantsPage from "./restaurantsPage";
import Wrapper from "./Wrapper";
import Restaurant from "./Restaurant";

function setup(saving) {
    const props = {

    };
}

// shallow: only goes 1 level deep (no restaurants)
// mount: renders everything
describe("component RestaurantsPage", () => {
    it("should have 3 restaurants at the beginning", () => {
        const wrapper = mount(<RestaurantsPage />);
        expect(wrapper.find(Wrapper).find(Restaurant).length).toBe(3);
    });

    // Wrapper can only be tested here since it relies on RestaurantPage's props
    it("should, after clicking the button, 3 more restaurants should appear", () => {
        const wrapper = mount(<RestaurantsPage/>);
        wrapper.find(".nextbutton").simulate("click");
        expect(wrapper.find(Wrapper).find(Restaurant).length).toBe(6);
    }); 
});