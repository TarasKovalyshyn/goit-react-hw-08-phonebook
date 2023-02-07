import { filterChange } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const onChange = e => dispatch(filterChange(e.target.value));
  return (
    <div className={css.filterContainer}>
      <label> Find contacts by name</label>
      <input
        type="text"
        className={css.filterInput}
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};
export default Filter;
