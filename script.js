function carregaDicionario() {
	var biografias = {
		bio01: {
			nome: 'Café des Chats',
			cidade: 'Paris',
			imagem: 'assets/Café-des-Chats.png',
			descricao:
				'O café de chats (café dos gatos - em tradução livre) possui 13 gatos que vivem livres, interagindo com os clientes dentro do estabelecimento. Todos os gatos foram adotados de associações de proteção de animais e são todos residentes fixos do café. Um ambiente propício para trabalhar remotamente, fazer sua refeição ou tomar um café enquanto observamos e apreciamos os felinos da casa.',
			citacao:
				'O menu possui muitas opções, inclusive vegetarianas. <br> No dia em que visitamos, para fugir do frio, provamos um chocolate quente, um delícioso cheesecake e uma torta de limão.',
		},
		bio02: {
			nome: 'Chat Mallows',
			cidade: 'Paris',
			imagem: 'assets/Chat-Mallows.png',
			descricao:
				'O Chat Mallows de Paris, possui mais de 10 gatos e um ambiente todo decorado e adaptados para eles. Funciona mais como um salão de chás do que como restaurantes, pois no cardápio há mais opções doces, chás, chocolates e cafés. <br> Importante saber que é necessário efetuar reserva no site antes de ir.',
			citacao:
				'O cardápio deste café é bem focado em opções doces, no dia em que fomos estava calor então optamos por pedir um sorvete e uma limonada saborizada. Para dias frios recomendamos alguma opção de bebida quentinha do cardápio e um quitute doce para acompanhar',
		},
		bio03: {
			nome: 'Le Moustache Café',
			cidade: 'Paris',
			imagem: 'assets/Le-Moustache-Café.png',
			descricao:
				'Com uma decoração linda e opções deliciosas no menu, o Moustache café era um local perfeito para apreciar um bom brunch, trabalhar ou ir com amigos. O café se localizava às beiras do rio Sena, mas em 2022 fecharam suas portas (devido à pandemia), houve um reestruturação e hoje em dia funcionam como hotel para gatos em outro local de Paris, onde as pessoas podem deixar seu gatinhos quando viajam de férias.',
			citacao:
				'Em nossa visita provamos um delicioso croque-madame, que é tipo um mixto quente com ovo, uma saladinha e batatas sautées e para refrescar uma limonada caseira',
		},
		bio04: {
			nome: "La Maison D'Elise",
			cidade: 'Nantes',
			imagem: 'assets/La-Maison-DElise.png',
			descricao:
				'Visitamos este café quando passávamos de férias por Nantes. Um café super charmoso e com uma decoração linda. Localizado em pleno centro da cidade o café possuía gatos da raça Maine Coon, porém também sofreu das consequências da pandemia e encerrou suas atividades em 2021 após 6 anos da abertura.',
			citacao:
				'Provamos um belo bagel de presunto e queijo, acompanhado de uma salada verde e um refresco. O cardápio possuía itens doces e salgados diversos.',
		},
		bio05: {
			nome: 'La Ronronnerie',
			cidade: 'Nice',
			imagem: 'assets/La-Ronronnerie.png',
			descricao:
				'La Ronronnerie de Nice é um café super aconchegante que possui gatos como residentes fixos da casa. O cardápio possui diversos lanchinhos, bebidas quentes e frescas, além de opções doces para provar.',
			citacao:
				'Visitamos o café em pleno verão europeu, então nada mais resfrescante do que tomar um chá gelado e um suco, também provamos um bagel, que estava muito gostoso. Para encerrar o café da manhã pedimos um delícioso cheesecake',
		},
		bio06: {
			nome: 'Chatperlipopette',
			cidade: 'Estrasburgo',
			imagem: 'assets/Chatperlipopette.png',
			descricao:
				'O Chatperlipopette fica em Estrasburgo, quando fomos nos sentimos visitando a casa da vovó, é uma sala com um sofá e algumas mesas em volta, assim como jogos para os gatos e caminhas espalhadas pelo ambiente. <br> O café trabalha em conjunto com uma associação local para incentivar a adoção de animais abandonados.',
			citacao:
				'O cardápio tem opções de bolos e tortas caseiros, na ocasião tomamos um maravilhoso chocolate quente e comemos uma torta de maçã.',
		},
		bio07: {
			nome: 'Chapristea',
			cidade: 'Toulouse',
			imagem: 'assets/Chapristea.png',
			descricao:
				'No centro de Toulouse está localizado o Chapristea, um café que possui poucas mesas no nível da rua, mas no subssolo existe um grande salão para acomodar os clientes e os gatos, que passeam entre a gente enquanto apreciamos uma bebida e uma guloseima. O café também trabalha com associações de proteção aos animais locais e alguns dos felinos da casa estão disponíveis para adoção.',
			citacao:
				'Um dos cardápios com mais opções de doces, bebidas, tipos de chás e lanches. Na ocasião de nossa visita pedimos um cheescake e um suco para refrescar, mas o estabelecimento oferece fórmulas de quiche+salada ou sanduíche+salada para o almoço.',
		},
		bio08: {
			nome: 'La Maison des Chats',
			cidade: 'Montpellier',
			imagem: 'assets/La-Maison-des-Chats.png',
			descricao:
				'Com uma decoração que parece uma casa de bonecas, este café possui 6 gatos (residentes fixos) e fica no centro de Montpellier. Um bom local para relaxar com um cafézinho uma comida leve e a casa oferece uma fórmula de brunch com bebida quente+suco+opção salgada+sobremesa.',
			citacao:
				'Em nossa visita no café da manhã, comemos uma torrada com salmão defumado, com ovos mexidos e salada para acompanhar um belo capuccino. O cardápio se altera dependendo da época do ano, é preciso consultar o site para saber as opções.',
		},
		bio09: {
			nome: 'Ronrons des Chartrons',
			cidade: 'Bordeaux',
			imagem: 'assets/Les-Ronrons-des-Chartrons.png',
			descricao:
				'Próximo ao museu do vinho em Bordeaux, localiza-se este pequeno café que acolhe gatos de uma associação local para adoção é uma parada recomendada para os amantes de felinos e que se engajam na causa de proteção de animais.',
			citacao:
				'O menu é 100% vegetariano e possui muitas opções veganas também. Comemos um sanduiche de salami vegetariano acompanhado de uma salade de alface e tomates cereja para completar o combo de café da manhã pedimos um chá e um chocolate quente.',
		},
		bio10: {
			nome: 'Bar a Chats',
			cidade: 'Dunquerke',
			imagem: 'assets/Bar-a-Chats.png',
			descricao:
				'Na cidade litorânea de Dunquerke existe um café gerenciado por uma associação de proteção de gatos. O local é 100% gerido por voluntárias e possui uma mini lojinha de produtos artesanais que arrecada fundos para ajudar nos regates dos animais. Os gatos do café estão disponíveis para adoção.',
			citacao:
				'Num dia de chuva e frio na cidade fomos nos aquecer neste café e aproveitar a companhia dos gatinhos gulosos que insistem em tentar pesticar seu chatilly, tomamos um bom chocolate quente e comemos um muffin de chocolate delícioso.',
		},
		bio11: {
			nome: 'Tea Dog',
			cidade: 'Montpellier',
			imagem: 'assets/Tea-Dog.png',
			descricao:
				'Igualmente aos cafés com gatos na França exsitem alguns cafés com cachorros, este é o segundo criado e fica em Montpellier, tem 2 residentes fixos super fofinhos (a Néia e o Zouk), além de possuir de tempos em tempos cachorros para adoção, pois trabalham em conjunto com as associações locais. O estabelecimento oferece também serviço de guarda temporária dos cachorros de seus clientes, que vão de períodos de 1h à 3h durante o dia.',
			citacao:
				'Em nossa visita comemos um croque-monsieur maravilhoso que vem com uma saladinha e de bebida um café.',
		},
		bio12: {
			nome: 'Le Waf Café',
			cidade: 'Lille',
			imagem: 'assets/Le-Waf.png',
			descricao:
				'O Le Waf café em Lille foi o primeiro café com cachorros aberto na França, possui 6 cachorros residentes fixos e acolhem outros de uma associação local disponíveis para adoção. Uma receção super calorosa por parte dos doguinhos e muita simpatia dos donos do local, o café oferece a opção de privatização da casa para eventos. Para evitar contratempos é bom fazer uma resevar antes da visita.',
			citacao:
				'Diferente dos demais cafés com gatos e cachorros da França o Le Waf oferece um buffet à vontade de bebidas e comidas por um preço fechado, no entanto sua permanência no local é limitado à 1 hora. Nossa visita foi perto do natal (por sorte) então éramos os únicos clientes do café naquele horário e pudemos nos divertir muito com os doguinhos simpáticos do local enquanto tomávamos nosso café com eles.',
		},
	};

	var content = document.getElementById('content');

	for (var bio in biografias) {
		content.innerHTML +=
			'<div class="card">' +
			'<img src="' +
			biografias[bio].imagem +
			'"/>' +
			'<details>' +
			'<summary>' +
			biografias[bio].nome +
			'</summary>' +
			'<p> Cidade: ' +
			biografias[bio].cidade +
			'</p>' +
			'<p>' +
			biografias[bio].descricao +
			'</p>' +
			'<blockquote>Sobre o cardápio: <q>' +
			biografias[bio].citacao +
			'</q></blockquote>' +
			'</details></div>';
	}
}

carregaDicionario();
