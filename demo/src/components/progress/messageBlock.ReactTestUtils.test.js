import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MessageBlock from './messageBlock';

function setup() {
  const props = {
    content: [],
    remove: ()=>{}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<MessageBlock {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('MessageBlock via React Test Utils', () => {
  it('renders div and button', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    let [ div1 ] = output.props.children;
    expect(div1.type).toBe('div');
  });

  it('recall button is labeled "Recall"', () => {
    const { output } = setup();
    const submitButton = output.props.children[1];
    expect(submitButton.props.value).toBe('Recall');
  });

});
