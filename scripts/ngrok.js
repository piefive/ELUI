const ngrok = require('ngrok');

ngrok.connect(6006).then(ngrokUrl => console.log(`ngrok start on ${ngrokUrl}`));
