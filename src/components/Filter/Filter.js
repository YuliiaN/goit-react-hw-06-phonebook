import { FilterTitleStyled, FilteredInputStyled } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const getValue = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterTitleStyled>{title}</FilterTitleStyled>
      <FilteredInputStyled
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={getValue}
      />
    </>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
