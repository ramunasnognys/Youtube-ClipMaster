import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const YouTubeInput = ({ onUrlChange, onTranscribe }) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTranscribe = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/transcribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ youtubeUrl: url }),
      });
      const data = await response.json();
      onTranscribe(data.transcription);
    } catch (error) {
      console.error("Error transcribing video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Enter YouTube URL"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          onUrlChange(e.target.value);
        }}
      />
      <Button
        onClick={handleTranscribe}
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Transcribing..." : "Transcribe"}
      </Button>
    </div>
  );
};

export default YouTubeInput;
