import App from './App.svelte';

while (document.body.firstChild) {
	document.body.removeChild(document.body.firstChild);
}

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

console.log(app);

export default app;