var express = require('express'),
    app = express(),
    server_config = require('./config/server');

//statics
app.use(express.static(__dirname + server_config.statics_src_public_dirname));
app.use(express.static(__dirname + server_config.statics_components_dirname));

//  /home route
app.use(require('./index.js'));

//serwer start
app.listen(server_config.port, () => {
    console.log(" HTTP server is listening on port: " + server_config.port);
});