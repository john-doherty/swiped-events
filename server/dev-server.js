var express = require('express');

function Server() {

    var port = 8080;
    var app = express();

    app.use(express.static('.', { etag: true, extensions: ['css', 'js', 'png', 'jpg', 'html', 'json'] }));

    // start the server
    app.listen(port, function () {
        console.log('Web server listening on port ' + port);
    });
}

module.express = new Server();
