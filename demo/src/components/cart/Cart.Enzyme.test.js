import React from 'react';
import expect from 'expect';
import {mount, shallow, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import Cart from "./Cart";
import CartList from "./CartList";
import Dish from "./Dish";
import Total from "./Total";

describe("component Cart", () => {
    it("should start with 3 dishes", () => {
        const wrapper = mount(<Cart/>);
        expect(wrapper.find(Dish).length).toBe(3);
    });
    it("after removing once, should have 2 dishes", () => {
        const wrapper = mount(<Cart/>);
        wrapper.find(".removeItem").find("button").first().simulate("click");
        expect(wrapper.find(Dish).length).toBe(2);
    });
    it("after removing three times, should have 0 dishes", () => {
        const wrapper = mount(<Cart/>);
        wrapper.find(".removeItem").find("button").first().simulate("click");
        wrapper.find(".removeItem").find("button").first().simulate("click");
        wrapper.find(".removeItem").find("button").first().simulate("click");
        expect(wrapper.find(Dish).length).toBe(0);
    });
});