// src/components/KeywordSearch.jsx
import React, { useState } from "react";
import { Input, Button } from "./ui";

const KeywordSearch = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={handleSearch} className="w-full">
        Search
      </Button>
    </div>
  );
};

export default KeywordSearch;
