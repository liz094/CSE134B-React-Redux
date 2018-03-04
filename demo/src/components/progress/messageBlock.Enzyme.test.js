import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import MessageBlock from './messageBlock';

function setup() {
  const props = {
    content: [],
    remove: ()=>{}
  };

  return shallow(<MessageBlock {...props} />);
}

describe('MessageBlock via Enzyme', () => {
  it('renders div and button', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('button').text()).toEqual('Recall');
  });

});
