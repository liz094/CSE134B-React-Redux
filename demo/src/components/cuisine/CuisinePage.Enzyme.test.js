import React from 'react';
import expect from 'expect';
import {mount, shallow, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import CuisinePage from './CuisinePage';
import CuisineStyle from './CuisineStyle';

function setup(saving) {
    const props = {

    };
}

describe("component CuisinePage", () => {
    it("should have 5 cuisine types", () => {
        const wrapper = shallow(<CuisinePage />);
        expect(wrapper.find(CuisineStyle).length).toBe(5);
    });

    it("should have a next wrapper...", () => {
        const wrapper = shallow(<CuisinePage />);
        expect(wrapper.find(".nextWrapper").length).toBe(1);
    });

    it("with a next page button", () => {
        const wrapper = shallow(<CuisinePage />);
        expect(wrapper.find(".nextWrapper").children().find(".nextbutton").length).toBe(1);
    });
});

/*
// for my personal reference:

describe('Component Foo', function() {
    it ('should have a class named foo', function() {
    const wrapper = shallow(<Foo />);
    expect(wrapper.is(‘.foo')).to.equal(true);
    })
   it(‘should have two children’, function() {
    const wrapper = shallow(<Foo />);
    expect(wrapper.children().length).to.equal(2)
    })
   it(‘should have children with a class named bar’, function() {
    const wrapper = shallow(<Foo />);
    expect(wrapper.children(‘.bar’).length).to.equal(2);
    })
   })
*/