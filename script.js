let webHook = 'https://danielly.app.n8n.cloud/webhook/animacao';

async function cliqueiNoBotao() {
  let textInput = document.querySelector('.input').value;
  let codigo = document.querySelector('.codigo-css');
  let resultAnimacao = document.querySelector('.result');

  let resposta = await fetch(webHook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pergunta: textInput }),
  });

  let resultado = await resposta.json();

  let info = JSON.parse(resultado.resposta);

  console.log(info);

  codigo.innerHTML = info.code;
  resultAnimacao.innerHTML = info.preview;

  document.head.insertAdjacentHTML(
    'beforeend',
    '<style>' + info.style + '</style>'
  );
}
