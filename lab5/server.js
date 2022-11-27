const http = require('http'),
  url = require('url'),
  fs = require('fs'),
  io = require('socket.io'),
  mongoose = require('mongoose');

const Restaurant = require('./model/Restaurant');
const Order = require('./model/Order');

const connectionString =
  'mongodb+srv://nasa-api:nasa-api-pass@cluster0.thj7sei.mongodb.net/restaurant?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Mongoose connected successfully ');
    },
    (error) => {
      console.log('Mongoose could not connect to the database : ' + error);
    }
  );

const server = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/':
      fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html',
        });
        res.write(data, 'utf8');
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function (res) {
  res.writeHead(404);
  res.write('404');
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

const ioServer = io.listen(server);

ioServer.on('connection', function (socket) {
  console.log('Connection accepted.');

  socket.on('message', function (message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit('msgreceived');
  });

  socket.on('disconnect', function () {
    console.log('Disconnected...');
  });

  socket.on('get-restaurants', () => {
    console.log('server - get-restarants called');

    Restaurant.find((error, documents) => {
      if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
      else {
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map((x) => (x) => x.name);
        socket.emit('restaurants-data', data);
      }
    });
  });

  socket.on('get-orders', () => {
    console.log('server - get orders called');

    Order.find((error, documents) => {
      if (error) console.log(`Error occurred on Order.find(): ${error}`);
      else {
        console.log(`Order.find() returned documents: ${documents}`);
        const data = documents.map((x) => (x) => x.item);
        socket.emit('order-data', data);
      }
    });
  });

  socket.on('add-order', async () => {
    console.log('server - add order called');

    try {
      var newOrder = new Order({
        order_id: 3,
        item: 'Chicken Tikka Shawarma',
        customer_name: 'Neil',
      });
      const res = await newOrder.save();
      console.log('Order was added by server', res);
      socket.emit('order-data-added', res);
    } catch (error) {
      console.log('Error caught', error);
      return res.status(500).send('Server Error');
    }
  });
});
