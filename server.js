const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

//const rendertron = require('rendertron-middleware');

const newsApi = require('./fetchRequest.js'); //example newsApi(country, sources, path)
var cron = require('node-cron');


//execute every 1 min //https://crontab.guru/#15_14_1_*_*
cron.schedule('*/3 * * * *', function(){
//	newsApi.newsAPIFetch('time', './data/time.json');
	console.log('working!!!! -- hellow from cron autostart')
});


const botUserAgents = [
  'W3C_Validator',
  'baiduspider',
  'bingbot',
  'googlebot',
];

const botList = new RegExp(botUserAgents.join('|'), 'i');

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render',
  userAgentPattern: botList,
}));
app.use(express.static('public'));



app.get('/*', function(req, res) {
  res.sendFile('./public/index.html', { root: __dirname })
})
/*
app.get('/:news/:title', (req, res) => {
    const queryParamsss = { title: req.params.title, source: req.params.news }
  })
*/
server.listen(8080, function() {
    console.log('listening on *:8080');
});