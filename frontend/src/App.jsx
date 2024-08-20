// src/App.jsx
import React, { useState, useCallback } from 'react';
import Layout from './components/Layout';
import YouTubeInput from './components/YouTubeInput';
import VideoPreview from './components/VideoPreview';
import KeywordSearch from './components/KeywordSearch';
import SearchResults from './components/SearchResults';
import { Card, CardContent } from './components/ui/card';

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleUrlChange = useCallback((url) => {
    setYoutubeUrl(url);
  }, []);

  const handleTranscribe = (url) => {
    console.log('Transcribing:', url);
    // Here you would typically call your backend API to transcribe the video
  };

  const handleSearch = (keyword) => {
    console.log('Searching for:', keyword);
    // Here you would typically call your backend API to search the transcription
    setSearchResults([
      {
        timeframe: '00:01:30',
        sentence: `This is a sentence containing the keyword "${keyword}"`,
        url: `${youtubeUrl}&t=90`,
      },
      // Add more dummy results as needed
    ]);
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <YouTubeInput onUrlChange={handleUrlChange} onTranscribe={handleTranscribe} />
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