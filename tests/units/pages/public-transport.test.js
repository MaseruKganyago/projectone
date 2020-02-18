/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PublicTransport } from '@root/pages/public-transport';

const defaultComponent = <PublicTransport t={() => {}} />;

test('PublicTransport is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
