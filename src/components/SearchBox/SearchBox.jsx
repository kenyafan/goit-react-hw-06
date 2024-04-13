import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Enter search name"
        name="search"
      />
    </label>
  );
};

export default SearchBox;
