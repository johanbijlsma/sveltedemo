import App from './App.html';
const app = new App({
	target: document.body,
	data: {
		name: 'world',
		cardsData: [{
			title: 'Lorem', content: 'Article 1: Lorem ipsum', imgUrl: 'https://images.unsplash.com/photo-1548772981-2fded21624d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'},
			{title: 'Another title', content: 'Article 2: Lorem ipsum', imgUrl: 'https://images.unsplash.com/photo-1546105425-1dde05355419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'},
			{title: 'Article 3', content: 'Article 3: Lorem ipsum', imgUrl: 'https://images.unsplash.com/photo-1545181978-7c80df85b296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2008&q=80'},
			{title: 'Article 4', content: 'Article 4: Lorem ipsum', imgUrl: ''},
			{title: 'Article 5', content: 'Article 5: Lorem ipsum', imgUrl: 'https://images.unsplash.com/photo-1466943908695-cca6dee39aa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'},
		],
	code: `<div class="card-container">
	{#each cardsData as card}
	<div class="card">
		<h2 class="card-title">{card.title}</h2>
		{#if card.imgUrl}
		<img class="card-image" src={card.imgUrl} alt="">
		{:else}
		<div class="placeholder error">
			No image found...</div>
		{/if}
		<p class="card-content">{card.content}</p>
	</div>
	{/each}
</div>`,
	codeVisible: false

	}
});


export default app;