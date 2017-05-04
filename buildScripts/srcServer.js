import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// The following line disables that type of warning for this particular file
/* eslint-disable no-console */

const port = 3000;
const app = express();
// Configure a Webpack compiler with our development config
const compiler = webpack(config);

// Tell our app to use our Webpack dev middleware using the compiler that we configured earlier,
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

// TODO: Get constants from config file (like done in Joe Eames course)
// TODO: Merge with Loqr Boiler Plate
// Define routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		// TODO: Get constants from config file (like done in Joe Eames course)
		open('http://localhost:' + port);
	}
});
