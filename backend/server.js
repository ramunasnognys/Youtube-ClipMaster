const express = require('express');
const cors = require('cors');
const { downloadAndTranscribe } = require('./ytdwn');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/transcribe', async (req, res) => {
  try {
    const { youtubeUrl } = req.body;
    const transcription = await downloadAndTranscribe(youtubeUrl);
    res.json({ transcription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});