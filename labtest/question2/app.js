const EventEmitter = require('events');

const pingPongEmitter = new EventEmitter();

let roundNum = 0;

const playGame = (num) => {
  pingPongEmitter.on('ping', () => {
    setTimeout(() => {
      console.log(`Round ${roundNum}`);
      console.log('ping..');
      pingPongEmitter.emit('pong');
    }, 1000);
  });

  pingPongEmitter.on('pong', () => {
    setTimeout(() => {
      console.log('pong..');
      if (roundNum < num) {
        roundNum += 1;
        pingPongEmitter.emit('ping');
      } else {
        console.log('game over..');
      }
    }, 1500);
  });

  if (roundNum < num) {
    roundNum += 1;
    pingPongEmitter.emit('ping');
  }
};
playGame(3);
