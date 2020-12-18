// Core
import PropTypes from 'prop-types';

// Props
Typography.propTypes = {
  /** Component content */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Component HTML tag */
  as:     PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div']),
  /** DOM Testing Library use it */
  testId: PropTypes.string,
};

Typography.defaultProps = {
  as:     'p',
  testId: null,
};

export function Typography({ testId, children, as: T }) {
  return (
    <T data-testid={testId}>{children}</T>
  );
}
