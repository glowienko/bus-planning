
var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: '/projects/new-wbd-project-web-serwer/client/src'
    });
});

module.exports = router;