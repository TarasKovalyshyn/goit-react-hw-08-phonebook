import { changeFilter } from 'components/redux/contactsSlice';
import { selekectFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch(selekectFilter);
  const filter = useSelector();
  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <label className={css.label__filter}>
      Find contacts by name
      <input
        type="text"
        className={css.filter__input}
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
