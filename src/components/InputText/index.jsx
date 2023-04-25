import P from 'prop-types';
import './style.css';

export const InputText = ({ searchValue, handleChange, placeholder }) => {
  return (
    <input
      className="text-input"
      type="search"
      placeholder={placeholder}
      value={searchValue}
      onChange={handleChange}
    />
  );
};

InputText.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
  placeholder: P.string.isRequired,
};
