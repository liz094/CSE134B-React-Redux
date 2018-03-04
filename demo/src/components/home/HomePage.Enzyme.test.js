import React from 'react';
import expect from 'expect';
import {mount, shallow, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import HomePage from './HomePage';

function setup(saving) {
    const props = {

    };
}

describe("HomePage", () => {
    it("should have 5 cuisine types", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('.first_line').length).toBe(1);
    });

    it("should have a bg picture container...", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(".bg-container").length).toBe(1);
    });
});
