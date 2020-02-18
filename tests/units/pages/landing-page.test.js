/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { LandingPage } from '@root/pages/landing-page';

const defaultComponent = <LandingPage t={() => {}} />;

test('LandingPage is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
