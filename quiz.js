// Página inicial do quiz.
document.getElementById('button-iniciar-quiz').addEventListener('click', function() {
	primeiraPergunta();
});

//Página questão 1
function primeiraPergunta() {
	let divUm = document.getElementById('div1');
	divUm.innerHTML = `<p>Pergunta 1 de 4:</p></br>
    <p>Quem pintou a obra ‘Abaporu’?</p></br>
    <img src="images/abaporu.jpg" alt="Abaporu" width=250 height=350>
    <button id='bt1' value="errado">Pedro Américo</button>
    <button id='bt2' value="errado">Beatriz Milhazes</button></br>
    <button id='bt3' value="correto">Tarsila do Amaral</button>
    <button id='bt4' value="errado">Candido Portinari</button></br>
    <button class="btn-next" id="btnAgain" >Tentar novamente!</button></br>
    <button class="btn-next" id="proximaPergunta" >Próxima</button>`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divUm = document.getElementById('div1').innerHTML = '';
		document.getElementById('acertoOuErro').innerHTML = '';
		segundaPergunta();
	});
}

//Página questão 2
function segundaPergunta() {
	let divDois = document.getElementById('div2');
	divDois.innerHTML = `<p>Pergunta 2 de 4:</p></br>
    <img src="images/bumba-meu-boi.jpg" alt="Bumba meu Boi " width=250 height=350>
    <p>O Bumba meu Boi é uma tradicional festa de qual estado?</p></br>
    <button id='bt1' value="errado">Rio Grande do Norte</button>
    <button id='bt2' value="correto">Maranhão</button></br>
    <button id='bt3' value="errado">Amazonas</button>
    <button id='bt4' value="errado">Bahia</button></br>
    <button class="button" id="btnAgain" >Tentar novamente!</button></br>
    <button class="button" id="proximaPergunta" >Próxima</button>`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divDois = document.getElementById('div2').innerHTML = '';
		document.getElementById('acertoOuErro').innerHTML = '';
		terceiraPergunta();
	});
}

//Página questão 3
function terceiraPergunta() {
	let divTres = document.getElementById('div3');
	divTres.innerHTML = `<p>Preparados?! Pergunta 3 de 4:</p></br>
    <p>Qual artista plástico é conhecido por pintar bandeirinhas? </p></br>
    <img src="images/grande-fachada-festiva.jpg" alt="Grande Fachada Festiva
    " width=250 height=350>
    <button id='bt1' value="errado">Aldemir Martins</button>
    <button id='bt2' value="correto">Alfredo Volpi</button></br>
    <button id='bt3' value="errado">Lasar Segall</button>
    <button id='bt4' value="errado">Candido Portinari</button></br>
    <button class="btn-next" id="btnAgain" >Tentar novamente!</button></br>
    <button class="btn-next" id="proximaPergunta" >Próxima</button>`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divTres = document.getElementById('div3').innerHTML = '';
		document.getElementById('acertoOuErro').innerHTML = '';
		quartaPergunta();
	});
}

//Página questão 4
function quartaPergunta() {
	let divQuatro = document.getElementById('div4');
	divQuatro.innerHTML = `<p>Pergunta 4 de 4:</p></br>
    <p>Nas margens de qual rio, Dom Pedro I declarou a independência do Brasil?</p></br>
    <img src="images/independencia.jpg" alt="Independência ou Morte!" width=250 height=350>
    <button id='bt1' value="correto">Rio Ipiranga</button>
    <button id='bt2' value="errado">Rio Tiete</button></br>
    <button id='bt3' value="errado">Rio Grande do Sul</button>
    <button id='bt4' value="errado">Rio Pinheiros</button></br>
    <button class="button" id="btnAgain" >Tentar novamente!</button></br>
    <button class="button" id="proximaPergunta" >Finalizar quiz!</button>`;

	document.getElementById('proximaPergunta').disabled = true;
	carregarBotoes();

	document.getElementById('proximaPergunta').addEventListener('click', function() {
		divQuatro = document.getElementById('div4').innerHTML = '';
		document.getElementById('acertoOuErro').innerHTML = '';
		paginaFinalDoQuiz();
	});
}

// Página final do quiz
function paginaFinalDoQuiz() {
	let divCinco = document.getElementById('div5');
	divCinco.innerHTML = ` 
	<p class="texto-bilhete-dourado"><b>VOCÊ CONCLUIU A TOUR!</b></p>
	<p class="texto-bilhete-dourado">Printe seu segundo bilhete e compartilhe a experiência com seus amigos!</p>
	<p class="texto-bilhete-dourado"><i>Não esqueça de convidá-los para jogar também!</i></p>
	<img src="./images/bilhete-dourado.png" alt="bilhete-dourado" class="bilhete-img" />
	<p class="bilhete-dourado-volte-sempre"><b>Volte Sempre!</b></p>
	 `;
}

//Função carregar botões da página
function carregarBotoes() {
	let resposta;

	document.getElementById('btnAgain').disabled = true;

	document.getElementById('bt1').addEventListener('click', function() {
		resposta = document.getElementById('bt1').value;
		verificaResposta(resposta);
	});

	document.getElementById('bt2').addEventListener('click', function() {
		resposta = document.getElementById('bt2').value;
		verificaResposta(resposta);
	});

	document.getElementById('bt3').addEventListener('click', function() {
		resposta = document.getElementById('bt3').value;
		verificaResposta(resposta);
	});

	document.getElementById('bt4').addEventListener('click', function() {
		resposta = document.getElementById('bt4').value;
		verificaResposta(resposta);
	});

	document.getElementById('btnAgain').addEventListener('click', function() {
		habilitaBotoes();
	});
}

//Função para habilitar os botões da página
function habilitaBotoes() {
	document.getElementById('bt1').disabled = false;
	document.getElementById('bt2').disabled = false;
	document.getElementById('bt3').disabled = false;
	document.getElementById('bt4').disabled = false;
	document.getElementById('acertoOuErro').innerHTML = '';
}

//Função que verifica se resposta está correta ou não
function verificaResposta(resposta) {
	if (resposta == 'correto') {
		document.getElementById('acertoOuErro').innerHTML = 'Muito bem você acertou!';
		document.getElementById('proximaPergunta').disabled = false;
		document.getElementById('bt1').disabled = true;
		document.getElementById('bt2').disabled = true;
		document.getElementById('bt3').disabled = true;
		document.getElementById('bt4').disabled = true;
		document.getElementById('btnAgain').disabled = true;
	} else {
		document.getElementById('acertoOuErro').innerHTML = 'Humm, a resposta ainda não é essa!';
		document.getElementById('bt1').disabled = true;
		document.getElementById('bt2').disabled = true;
		document.getElementById('bt3').disabled = true;
		document.getElementById('bt4').disabled = true;
		document.getElementById('btnAgain').disabled = false;
	}
}
