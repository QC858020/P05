// __tests__/SigningUp-test-en.js
import 'react-native';
import React from 'react';

global.lang = 'en';
import SigningUp from '../../../main/SigningUp';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <SigningUp />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
