/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { FuelWiseItem } from '@root/components/fuelWiseItem';

const defaultComponent = <FuelWiseItem t={() => {}} />;

test('FuelWiseItem is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
