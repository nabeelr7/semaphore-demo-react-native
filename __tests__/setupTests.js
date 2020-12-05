// setup-tests.js

import 'react-native';
import 'jest-enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //TODO: replace this with enzyme-adapter-react-17 when official react 17 support is added
import Enzyme from 'enzyme';

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({adapter: new Adapter()});

/**
 * Ignore some expected warnings
 * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
 * see https://github.com/Root-App/react-native-mock-render/issues/6
 */
const originalConsoleError = console.error;
console.error = message => {
  if (message.startsWith('Warning:')) {
    return;
  }

  originalConsoleError(message);
};
