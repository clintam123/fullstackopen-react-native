import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import TextInput from "./TextInput";

const FilterInput = ({ setFilter, filter }) => {
  const [input, setInput] = useState(filter);
  const [value] = useDebounce(input, 100);

  useEffect(() => {
    setFilter(value);
  }, [input]);

  return (
    <TextInput
      value={input}
      onChangeText={setInput}
      placeholder="Filter repositories"
    />
  );
};

export default FilterInput;
