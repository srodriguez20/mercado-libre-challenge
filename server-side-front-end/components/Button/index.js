import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ children, ariaLabel, type = 'button' }) {
  return (
    <button className={styles['button']} aria-label={ariaLabel} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  ariaLabel: PropTypes.string,
  type: PropTypes.type,
};
export default Button;
