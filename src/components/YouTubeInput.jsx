// src/components/YouTubeInput.jsx
import React, { useState, useEffect } from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const YouTubeInput = ({ onUrlChange, onTranscribe }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Call onUrlChange whenever the URL changes
    onUrlChange(url);
  }, [url, onUrlChange]);

  const handleTranscribe = () => {
    onTranscribe(url);
  };

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Enter YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button onClick={handleTranscribe} className="w-full">Transcribe</Button>
    </div>
  );
};

export default YouTubeInput;