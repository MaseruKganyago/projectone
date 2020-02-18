/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { FuelWise } from '@root/pages/fuel-wise';

const defaultComponent = <FuelWise t={() => {}} />;

test('FuelWise is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
