/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { RegistrationSuccesful } from '@root/pages/registration-succesful';

const defaultComponent = <RegistrationSuccesful t={() => {}} />;

test('RegistrationSuccesful is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
