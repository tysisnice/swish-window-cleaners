
require('svelte/register');

const App = require('./src/App.svelte').default;

const { head, html, css } = App.render({
	answer: 42
});

console.log(head,html,css)