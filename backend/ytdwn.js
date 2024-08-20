const youtubedl = require("youtube-dl-exec");
const fs = require("fs");
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function downloadAndTranscribe(youtubeUrl) {
  try {
    // Download audio
    const output = await youtubedl(youtubeUrl, {
      extractAudio: true,
      audioFormat: "mp3",
      output: "audio.mp3",
    });

    console.log("Download complete:", output);

    // Transcribe audio
    const audioFile = fs.createReadStream("audio.mp3");
    const transcription = await openai.audio.transcriptions.create({
      model: "whisper-1",
      file: audioFile,
      response_format: "text",
    });

    // Save transcription to file
    fs.writeFileSync("transcription.txt", transcription);

    console.log("Transcription complete and saved to transcription.txt");

    return transcription;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

module.exports = { downloadAndTranscribe };
