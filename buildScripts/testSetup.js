// This file ins't transpiled, so must be CommonJS and ES5

// Register babel to transpile before our tests run, tells Mocha to first transpile the tests and only run them after
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand, in this case the 'css' extension, since one CSS file is
// being requested in the 'index.js' file.
// The following line tells Mocha that if he sees this he should treat it as an empty function
require.extensions['.css'] = function() {};
