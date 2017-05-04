import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	// We need to use the 'done' parameter so that the test runs assynchronously. If not, the test would say it had
	// succeeded without being the case
	it('should say hello', (done) => {
		// Reads the contents of the 'index.html' file to memory
		const index = fs.readFileSync('./src/index.html', "utf-8");
		// Define the environment (in this case the HTML content) in which the JSDOM will operate
		// Optionally, you can pass a second parameter with an array of Javascript files to be loaded. However, if any
		// of those files use fetch we need to use isomorphic fetch because fetch is a browser mechanism and hence
		// is not available in JSDOM
		jsdom.env(index, function(err, window) {
			// In this case, 'window' represents the window in the virtual browser
			// Get the element matching the first <h1> found in the page
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Hello World!");
			// Tell Mocha that our preparations are completed. Mocha will wait for this to evaluate the 'expect'
			// expressions
			done();
			// Close window to free up the memory used by the in-memory JSDOM
			window.close();
		})
	})
})
