// Core
import { cleanup, render } from '@testing-library/react';
// Domains
import { App } from './index';


describe('<App />', () => {
  afterEach(() => {
    cleanup();
  });

  describe('default behavior', () => {
    const { baseElement } = render(
      <App />,
    );

    it('should render without errors', () => {
      expect(baseElement).toBeInTheDocument();
    });
  });
});
