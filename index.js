const Microphone = require('node-microphone');
const Fs = require('fs');

let microphone = new Microphone();
let micStream = microphone.startRecording();
micStream.pipe(Fs.createWriteStream('./testing.wav'));

setTimeout(() => {
    console.info("Nauhoitus loppui.");
    microphone.stopRecording();
}, 5000);

microphone.on('info', (info) => {
    console.log(info);
})