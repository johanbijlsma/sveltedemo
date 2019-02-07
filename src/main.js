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
	codeVisible: false,
	// feedDump: {
	// 	"items": [
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: ANP",
	// 		"title": "Omdenkshow over kinderen - Stadsschouwburg Utrecht",
	// 		"link": "https://www.nu.nl/uitagenda-utrecht/5727438/omdenkshow-over-kinderen-stadsschouwburg-utrecht.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:12:38 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/m1oxipoaoubu_sqr256.jpg/omdenkshow-over-kinderen-stadsschouwburg-utrecht.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "Opvoeden, hoe doe je dat? De schrijver van de bekende boeken over Omdenken en de Ja-maar filosofie heeft daar wel ideeën over: stop met opvoeden. De voorstelling is een mix tussen theater, een lezing en cabaret.",
	// 		"contentSnippet": "Opvoeden, hoe doe je dat? De schrijver van de bekende boeken over Omdenken en de Ja-maar filosofie heeft daar wel ideeën over: stop met opvoeden. De voorstelling is een mix tussen theater, een lezing en cabaret.",
	// 		"guid": "https://www.nu.nl/-/5727438/",
	// 		"categories": [
	// 		  "Uitagenda Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T15:12:38.000Z"
	// 	  },
	// 	  {
	// 		"creator": "ANP",
	// 		"rights": "copyright photo: ANP",
	// 		"title": "Gemeente geeft subsidie aan huiseigenaren voor samenvoegen huizen",
	// 		"link": "https://www.nu.nl/rotterdam/5727426/gemeente-geeft-subsidie-aan-huiseigenaren-voor-samenvoegen-huizen.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:10:20 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/jpdxug7a9s5v_sqr256.jpg/gemeente-geeft-subsidie-aan-huiseigenaren-voor-samenvoegen-huizen.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "ANP",
	// 		"content": "De gemeente Rotterdam wil de komende jaren duizenden kleine woningen in Zuid laten samenvoegen tot grotere huizen. Verhuurders en huiseigenaren kunnen tot 35.000 euro subsidie krijgen als woningen worden samengevoegd of worden vergroot.",
	// 		"contentSnippet": "De gemeente Rotterdam wil de komende jaren duizenden kleine woningen in Zuid laten samenvoegen tot grotere huizen. Verhuurders en huiseigenaren kunnen tot 35.000 euro subsidie krijgen als woningen worden samengevoegd of worden vergroot.",
	// 		"guid": "https://www.nu.nl/-/5727426/",
	// 		"categories": [
	// 		  "Rotterdam"
	// 		],
	// 		"isoDate": "2019-02-06T15:10:20.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: 123RF",
	// 		"title": "Spoormakers Festival - Het Huis Utrecht",
	// 		"link": "https://www.nu.nl/uitagenda-utrecht/5727423/spoormakers-festival-het-huis-utrecht.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:05:40 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/18txwpuap6h7_sqr256.jpg/spoormakers-festival-het-huis-utrecht.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "De Domstad heeft een nieuw en bescheiden festival, waar nieuwe voorstellingen te ontdekken zijn. Je krijgt een avond lang een selectie van nieuw talent voorgeschoteld. Er is theater, dans, muziektheater en mime.",
	// 		"contentSnippet": "De Domstad heeft een nieuw en bescheiden festival, waar nieuwe voorstellingen te ontdekken zijn. Je krijgt een avond lang een selectie van nieuw talent voorgeschoteld. Er is theater, dans, muziektheater en mime.",
	// 		"guid": "https://www.nu.nl/-/5727423/",
	// 		"categories": [
	// 		  "Uitagenda Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T15:05:40.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: 123RF",
	// 		"title": "Fier Belgisch Bier! - Janskerk",
	// 		"link": "https://www.nu.nl/uitagenda-utrecht/5727414/fier-belgisch-bier-janskerk.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:02:38 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/m1mxmncapcu0_sqr256.jpg/fier-belgisch-bier-janskerk.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "Er is veel speciaalbier van Nederlandse bodem, maar bij dit festival staat het bier uit België centraal. In de Janskerk is er bier van twintig brouwerijen te proeven, van de tap of uit een fles.",
	// 		"contentSnippet": "Er is veel speciaalbier van Nederlandse bodem, maar bij dit festival staat het bier uit België centraal. In de Janskerk is er bier van twintig brouwerijen te proeven, van de tap of uit een fles.",
	// 		"guid": "https://www.nu.nl/-/5727414/",
	// 		"categories": [
	// 		  "Uitagenda Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T15:02:38.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: EPA",
	// 		"title": "Dierenorganisatie gaat aangifte doen na betasting teefjes hondenshow Eindhoven",
	// 		"link": "https://www.nu.nl/dieren/5727408/dierenorganisatie-gaat-aangifte-doen-na-betasting-teefjes-hondenshow-eindhoven.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:12:18 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/3clxd5ja263k_sqr256.jpg/dierenorganisatie-gaat-aangifte-doen-na-betasting-teefjes-hondenshow-eindhoven.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "Dierenrechtenorganisatie Animal House bereidt een aangifte voor tegen de mannen die afgelopen weekend honden betastten tijdens een hondenshow in Eindhoven.",
	// 		"contentSnippet": "Dierenrechtenorganisatie Animal House bereidt een aangifte voor tegen de mannen die afgelopen weekend honden betastten tijdens een hondenshow in Eindhoven.",
	// 		"guid": "https://www.nu.nl/-/5727408/",
	// 		"categories": [
	// 		  "Algemeen",
	// 		  "Binnenland",
	// 		  "Dieren",
	// 		  "Eindhoven"
	// 		],
	// 		"isoDate": "2019-02-06T15:12:18.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: 123RF",
	// 		"title": "Gluren bij de Buren - verschillende locaties",
	// 		"link": "https://www.nu.nl/uitagenda-utrecht/5727399/gluren-bij-de-buren-verschillende-locaties.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:00:59 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/cezxb6malf7h_sqr256.jpg/gluren-bij-de-buren-verschillende-locaties.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "Op zondag 10 februari kun je misschien wel even gluren bij je buren. Tijdens het gelijknamige festival stellen veel huiskamers hun deuren open om er artiesten te verwelkomen. Zo kun je de buurt ontdekken en luisteren naar nieuw talent.",
	// 		"contentSnippet": "Op zondag 10 februari kun je misschien wel even gluren bij je buren. Tijdens het gelijknamige festival stellen veel huiskamers hun deuren open om er artiesten te verwelkomen. Zo kun je de buurt ontdekken en luisteren naar nieuw talent.",
	// 		"guid": "https://www.nu.nl/-/5727399/",
	// 		"categories": [
	// 		  "Uitagenda Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T15:00:59.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: ANP",
	// 		"title": "30 Seconds Toernooi - Filmcafé",
	// 		"link": "https://www.nu.nl/uitagenda-utrecht/5727402/30-seconds-toernooi-filmcafe.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:00:03 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/dhmx1z3aj7vd_sqr256.jpg/30-seconds-toernooi-filmcafe.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "De kaarten vliegen je om de oren tijdens het 30 Seconds Toernooi in het filmcafé. Bij dit spel is de bedoeling  zoveel mogelijk van de vijf woorden of personen op je kaartje te omschrijven in dertig seconden. Na het toernooi is een afterparty.",
	// 		"contentSnippet": "De kaarten vliegen je om de oren tijdens het 30 Seconds Toernooi in het filmcafé. Bij dit spel is de bedoeling  zoveel mogelijk van de vijf woorden of personen op je kaartje te omschrijven in dertig seconden. Na het toernooi is een afterparty.",
	// 		"guid": "https://www.nu.nl/-/5727402/",
	// 		"categories": [
	// 		  "Uitagenda Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T15:00:03.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: ProShots",
	// 		"title": "Pim Verbeek (62) stopt als bondscoach Oman en beëindigt carrière",
	// 		"link": "https://www.nu.nl/voetbal/5727393/pim-verbeek-62-stopt-als-bondscoach-oman-en-beeindigt-carriere.html",
	// 		"pubDate": "Wed, 06 Feb 2019 16:08:34 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/3cwx3ttau0jm_sqr256.jpg/pim-verbeek-62-stopt-als-bondscoach-oman-en-beeindigt-carriere.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "Pim Verbeek heeft woensdag zijn trainerscarrière beëindigd. De 62-jarige Nederlander was de laatste jaren actief als bondscoach van Oman.",
	// 		"contentSnippet": "Pim Verbeek heeft woensdag zijn trainerscarrière beëindigd. De 62-jarige Nederlander was de laatste jaren actief als bondscoach van Oman.",
	// 		"guid": "https://www.nu.nl/-/5727393/",
	// 		"categories": [
	// 		  "Sport",
	// 		  "Voetbal"
	// 		],
	// 		"isoDate": "2019-02-06T15:08:34.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: ANP",
	// 		"title": "Mislukte inbraak in restaurant Smoesjes Oog in Al",
	// 		"link": "https://www.nu.nl/utrecht/5727387/mislukte-inbraak-in-restaurant-smoesjes-oog-in-al.html",
	// 		"pubDate": "Wed, 06 Feb 2019 15:51:21 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/06nxwpaaw8lx_sqr256.jpg/mislukte-inbraak-in-restaurant-smoesjes-oog-in-al.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "Inbrekers hebben in de nacht van dinsdag op woensdag geprobeerd binnen te komen bij restaurant Smoesjes aan de Händelstraat in Oog in Al.",
	// 		"contentSnippet": "Inbrekers hebben in de nacht van dinsdag op woensdag geprobeerd binnen te komen bij restaurant Smoesjes aan de Händelstraat in Oog in Al.",
	// 		"guid": "https://www.nu.nl/-/5727387/",
	// 		"categories": [
	// 		  "Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T14:51:21.000Z"
	// 	  },
	// 	  {
	// 		"creator": "NU.nl",
	// 		"rights": "copyright photo: Hollandse Hoogte",
	// 		"title": "Nationale Gezondheidsbeurs - Jaarbeurs Utrecht",
	// 		"link": "https://www.nu.nl/uitagenda-utrecht/5727378/nationale-gezondheidsbeurs-jaarbeurs-utrecht.html",
	// 		"pubDate": "Wed, 06 Feb 2019 15:50:06 +0100",
	// 		"enclosure": {
	// 		  "url": "https://media.nu.nl/m/xfzxyi2a6uaa_sqr256.jpg/nationale-gezondheidsbeurs-jaarbeurs-utrecht.jpg",
	// 		  "length": "0",
	// 		  "type": "image/jpeg"
	// 		},
	// 		"dc:creator": "NU.nl",
	// 		"content": "In de Jaarbeurs kun je het hele weekend inspiratie opdoen over gezond leven, eten en bewegen. Er komen veel sprekers, zoals Goedele Liekens, Irene Moors en Fajah Lourens. Daarnaast zijn er veel workshops en kookdemo's.",
	// 		"contentSnippet": "In de Jaarbeurs kun je het hele weekend inspiratie opdoen over gezond leven, eten en bewegen. Er komen veel sprekers, zoals Goedele Liekens, Irene Moors en Fajah Lourens. Daarnaast zijn er veel workshops en kookdemo's.",
	// 		"guid": "https://www.nu.nl/-/5727378/",
	// 		"categories": [
	// 		  "Uitagenda Utrecht"
	// 		],
	// 		"isoDate": "2019-02-06T14:50:06.000Z"
	// 	  }
	// 	],
	// 	"feedUrl": "https://www.nu.nl/rss",
	// 	"title": "NU",
	// 	"description": "Het laatste nieuws het eerst op NU.nl",
	// 	"link": "https://www.nu.nl/",
	// 	"language": "nl-nl",
	// 	"copyright": "Copyright (c) 2019, NU",
	// 	"lastBuildDate": "Wed, 06 Feb 2019 16:12:38 +0100",
	// 	"ttl": "60"
	//   }
	NuNLLatestNews: ''
	},
});

import "../public/assets/rss-parser.min.js";

  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  // const rss_NOS = "http://feeds.nos.nl/nosnieuwsalgemeen";
  const rss_NU = "https://www.nu.nl/rss";

  let parser = new RSSParser();
   parser.parseURL(CORS_PROXY + rss_NU, function(err, feed) {
    console.log(feed);
    const newsArray = [];
	newsArray.push(feed);
	console.log(newsArray);
	app.set({ NuNLLatestNews: newsArray[0]});
    })



export default app;