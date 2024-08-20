// src/components/SearchResults.jsx
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

const SearchResults = ({ results }) => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Search Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {results.map((result, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardContent className="p-4">
                <p className="font-semibold text-white">{result.timeframe}</p>
              <p>{result.sentence}</p>
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Watch on YouTube
              </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResults;