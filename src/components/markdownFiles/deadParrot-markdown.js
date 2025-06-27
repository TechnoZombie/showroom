const deadParrotMarkdown =`
# ![Diagram](https://github.com/TechnoZombie/DeadParrot/blob/main/img/DeadParrotSmall.png?raw=true) DeadParrot

![GitHub last commit](https://img.shields.io/github/last-commit/TechnoZombie/DeadParrot)

**DeadParrot** is a Java-based audio repeater designed for use in amateur radio setups. It listens for audio input, records the audio for a defined period or until silence is detected, and then plays back the same recording — just like a parrot!

This project mimics the behavior of a repeater station by automatically handling sound detection, recording, and playback, with minimal setup.

---

## 🎯 Features

- 🎙️ **Sound Detection** – Begins recording only when sound is detected via threshold analysis.
- ⏺️ **Smart Recording** – Automatically stops recording after a period of silence or a max duration.
- 📁 **WAV File Output** – Saves recordings as standard \`\`.wav\`\` files.
- 🔊 **Playback Support** – Plays back the recorded audio after a short leading "ping" sound.
- 🧠 **Threaded Design** – Handles recording and playback on separate threads to ensure responsive performance.
- 🕵️ **Spy Mode** – A silent monitoring mode that records transmissions without playing them back.

---

## 🛠️ Project Structure

- **\`\`AudioRecorder.java\`\`** – Manages microphone input, records sound, detects silence, and writes to a WAV file.
- **\`\`AudioPlayer.java\`\`** – Plays the recorded audio and optionally a leading "ping" sound.
- **\`\`Listener.java\`\`** – Constantly monitors for sound to trigger the recording process.

---

## 🔧 Configuration

Configuration values such as:

- \`\`AUDIO_FORMAT\`\`
- \`\`MAX_RECORDING_TIME_MS\`\`
- \`\`SILENCE_THRESHOLD\`\`
- \`\`SOUND_DETECTION_SENSITIVITY\`\`
- \`\`KEEP_RECORDINGS\`\`
- \`\`SPY_MODE\`\`

You can customize:

- The threshold for sound detection
- Max recording duration
- Whether to keep audio files or delete them after playback
- Whether Spy Mode is enabled (silent monitoring only)

---

## 🪛 Dependencies

This project uses:

- Java Sound API (\`\`javax.sound.sampled\`\`)
- [Lombok](https://projectlombok.org/) for logging via \`\`@Slf4j\`\`
- Custom utility classes:
- \`\`WaveWriterUtil\`\` – for managing WAV headers
- \`\`LeadingPingPreloader\`\` – handles preloading the ping sound

---

## 🚀 How It Works

1. \`\`Listener\`\` monitors the audio input for audio that exceeds a defined threshold.
2. When sound is detected:
- \`\`AudioRecorder\`\` records until silence is detected or the max time elapses.
- The recorded audio is saved as a WAV file.
3. After recording:
- A "ping" sound is played (helps to trigger VOX on radios in time for the full file to be played back).
- The recorded audio is played back through the computer audio output.
- *If Spy Mode is enabled, playback is skipped.*

---

## 🔄 Typical Use Case

This tool can be used as:

- Amateur radio repeater - simplex
- Channel monitoring
- Parrot-style voice test setups
- Silent radio surveillance or logging with **Spy Mode**

---

## Future Enhancements

- Ability to manually set the line input
- GUI - Graphic interface for ease of use`;

export default deadParrotMarkdown;