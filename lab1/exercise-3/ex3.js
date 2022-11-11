const say = require("say");

say.speak("Hello!");

setTimeout(say.speak("Hello!, Alex"), 5000);

say.stop();

say.speak("Hello!", "Alex", 0.5);
