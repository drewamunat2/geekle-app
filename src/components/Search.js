import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchBar from "material-ui-search-bar";

function Search(props) {
  const { query, updateQuery } = props;
  return (
    <SearchBar 
      value={query} 
      onChange={(newValue) => updateQuery(newValue)}
      onCancelSearch={() => updateQuery("")} 
    />
  );
}

export default Search;