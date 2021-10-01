import PropTypes from 'prop-types';

// Styles
import { StyledButton } from './Button.style';

const Button = ({ text, action }) => {
  return (
    <StyledButton disabled={action ? false : true} onClick={action}>
      {text}
    </StyledButton>
  );
};

// Prop types
Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
