import React from 'react';
import expect from 'expect';
import {mount, shallow, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import tenderGreens from './tenderGreens';

function setup(saving) {
    const props = {

    };
}

describe("tenderGreens Page", () => {
    /*
    it("should have 10 images for food", () => {
        const wrapper = shallow(<tenderGreens />);
        expect(wrapper.find('img').length).toBe(10);
    });

    it("should have 10 buttons", () => {
        const wrapper = shallow(<tenderGreens />);
        expect(wrapper.find('button').length).toBe(10);

    });

    it("should have 3 categories", () => {
        const wrapper = shallow(<tenderGreens />);
        expect(wrapper.find('.food_image').length).toBe(3);
    });*/

    it("should have 0 h1", () => {
        const wrapper = shallow(<tenderGreens />);
        expect(wrapper.find('h1').length).toBe(0);
    });
});

