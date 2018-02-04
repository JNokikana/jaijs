require('dotenv').config();

const Speakable = require('voice-recognition');

var speakable = new Speakable({ "key": "notused" });

speakable.on('speechStart', function () {
  console.log('onSpeechStart');
});

speakable.on('speechStop', function () {
  console.log('onSpeechStop');
  speakable.recordVoice();
});

speakable.on('speechReady', function () {
  console.log('onSpeechReady');
});

speakable.on('error', function (err) {
  console.log('onError:');
  console.log(err);
  speakable.recordVoice();
});

speakable.on('speechResult', function (spokenWords) {
  console.log('onSpeechResult:')
  console.log(spokenWords);
});

speakable.init().then(() => {
  speakable.recordVoice();
});
