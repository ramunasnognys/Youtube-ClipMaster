import React, { useState, useCallback } from "react";
import Layout from "./components/Layout";
import YouTubeInput from "./components/YouTubeInput";
import VideoPreview from "./components/VideoPreview";
import KeywordSearch from "./components/KeywordSearch";
import SearchResults from "./components/SearchResults";
import { Card, CardContent } from "./components/ui/card";

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleUrlChange = useCallback((url) => {
    setYoutubeUrl(url);
  }, []);

  const handleTranscribe = (transcriptionText) => {
    setTranscription(transcriptionText);
  };

  const handleSearch = (keyword) => {
    if (!transcription) {
      console.log("No transcription available");
      return;
    }

    const lines = transcription.split("\n");
    const results = lines.filter((line) =>
      line.toLowerCase().includes(keyword.toLowerCase()),
    );

    setSearchResults(
      results.map((sentence, index) => ({
        timeframe: `00:${index}:00`, // Placeholder timeframe
        sentence,
        url: `${youtubeUrl}&t=${index * 60}`, // Placeholder timestamp
      })),
    );
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <YouTubeInput
                  onUrlChange={handleUrlChange}
                  onTranscribe={handleTranscribe}
                />
                <KeywordSearch onSearch={handleSearch} />
              </div>
              <div className="flex items-center justify-center">
                {youtubeUrl ? (
                  <VideoPreview url={youtubeUrl} />
                ) : (
                  <div className="text-center text-gray-400">
                    YouTube video preview will appear here
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        {searchResults.length > 0 && <SearchResults results={searchResults} />}
      </div>
    </Layout>
  );
}

export default App;
