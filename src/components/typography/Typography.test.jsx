// Core
import { cleanup, render } from '@testing-library/react';
// Component
import { Typography } from './index';


describe('<Typography />', () => {
  afterEach(() => {
    cleanup();
  });

  describe('default behavior', () => {
    const { getByTestId } = render(
      <Typography testId="id-default-behavior">
        <span>Children</span>
      </Typography>,
    );
    const component = getByTestId('id-default-behavior');

    it('should render children', () => {
      expect(component.childElementCount).toEqual(1);
    });

    it('should have HTML tag "p"', () => {
      expect(component.tagName).toEqual('P');
    });
  });

  describe('custom behaviour', () => {
    const { getByTestId } = render(
      <Typography testId="id-custom-behavior" as="h1">
        <span>Children</span>
      </Typography>,
    );
    const component = getByTestId('id-custom-behavior');

    it('should have HTML tag "h1"', () => {
      expect(component.tagName).toEqual('H1');
    });
  });
});
