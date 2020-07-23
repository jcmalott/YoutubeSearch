import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(term);
  }

  return(
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field"></div>
          <label>Search for a Label</label>
          <input
              type="text"
              onChange={(e) => {setTerm(e.target.value)}}
              value={term}>
          </input>
      </form>
    </div>
  );
}

export default SearchBar;
