import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import Hello from '../../src/components/hello/Hello.jsx';

describe('<Hello>', function () {
  it('should contain an h1 with the message passed in through the props', function() {
    const wrapper = shallow(<Hello message="Hello, World!" />);
    const inner = wrapper.find('h1');

    expect(inner.text()).to.equal("Hello, World!");
  });
});