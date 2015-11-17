// index.js
import falcorExpress from 'falcor-express';
import Router from 'falcor-router';

import express from 'express';

var app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
    // create a Virtual JSON resource with single key ("greeting")
    return new Router([
        {
            // match a request for the key "greeting"
            route: "greeting",
            // respond with a PathValue with the value of "Hello World."
            get: function () {
                return {path: ["greeting"], value: "Hello World"};
            }
        }
    ]);
}));
var __dirname = '.';
console.log(__dirname);
// serve static files from current directory
app.use(express.static(__dirname + '/views'));
console.log('Falcor-Express Server listening on port 3000');
var server = app.listen(3000);