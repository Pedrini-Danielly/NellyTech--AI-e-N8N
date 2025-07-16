# Nelly Tech ✨

## Criador de Animações com AI 🎨

Um gerador de animações CSS alimentado por Inteligência Artificial que transforma suas ideias em código CSS animado de forma instantânea.

## 🚀 Funcionalidades

- **Geração automática de CSS**: Descreva a animação que deseja e receba o código CSS pronto
- **Preview em tempo real**: Visualize sua animação imediatamente após a criação
- **Interface intuitiva**: Design moderno com tema escuro e efeitos visuais atraentes
- **Integração com AI**: Utiliza webhook para processar solicitações via N8N

## 🎯 Como Usar

1. **Digite sua solicitação**: No campo de entrada, descreva a animação que deseja criar
   - Exemplo: "coração pulsando"
   - Exemplo: "texto com efeito de digitação"
   - Exemplo: "botão com hover animado"

2. **Clique em "Criar Animação"**: O sistema processará sua solicitação usando AI

3. **Visualize o resultado**: 
   - O código CSS aparecerá no painel esquerdo
   - A animação será exibida no painel direito
   - O estilo será aplicado automaticamente à página

## 🛠️ Estrutura do Projeto

```
nelly-tech/
├── index.html          # Estrutura principal da aplicação
├── styles.css          # Estilos e animações da interface
├── script.js           # Lógica de integração com a AI
└── README.md          # Documentação do projeto
```

## 🎨 Características Visuais

- **Tema escuro**: Interface elegante com fundo preto
- **Efeitos animados**: 
  - Título com efeito de digitação
  - Subtítulo com surgimento suave
  - Botões com transições hover
  - Brilho e sombras animadas
- **Layout responsivo**: Adaptável a diferentes tamanhos de tela
- **Cores temáticas**: Verde neon (`rgb(10, 228, 10)`) e azul ciano (`#22ccee`)

## ⚙️ Configuração Técnica

### Webhook Integration
```javascript
let webHook = 'https://danielly.app.n8n.cloud/webhook/animacao';
```

### Estrutura da Requisição
```json
{
  "pergunta": "descrição da animação desejada"
}
```

### Estrutura da Resposta
```json
{
  "resposta": {
    "code": "código CSS formatado",
    "preview": "HTML da animação",
    "style": "CSS da animação"
  }
}
```

## 🔧 Instalação

1. Clone o repositório ou faça download dos arquivos
2. Certifique-se de que o webhook do N8N está configurado e funcionando
3. Abra o arquivo `index.html` em um navegador web
4. Comece a criar suas animações!

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## 🎯 Exemplos de Uso

### Animações Populares
- "botão pulsando"
- "texto com efeito de máquina de escrever"
- "cartão com hover 3D"
- "loading spinner"
- "gradiente animado"
- "bounce effect"

### Resultado Esperado
Cada solicitação retorna:
1. **Código CSS**: Formatado e pronto para uso
2. **Preview**: Demonstração visual da animação
3. **Aplicação automática**: Estilo aplicado imediatamente na página

## 🔮 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Animações e estilos avançados
- **JavaScript ES6+**: Fetch API e manipulação DOM
- **N8N**: Automação e integração com AI
- **AI**: Processamento de linguagem natural para geração de código

## 🎨 Animações da Interface

### Título Principal
- Efeito de digitação com cursor piscante
- Brilho animado (glow effect)
- Duração: 3 segundos

### Subtítulo
- Surgimento suave de baixo para cima
- Efeito sparkle contínuo
- Delay de 1.5 segundos

### Botões
- Transição suave no hover
- Efeito de escala no clique
- Mudança de cor animada

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar ideias

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através dos canais disponíveis.

<div align="start">
  <a href="https://wa.me/5515991563363" target="_blank">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>
  <a href="https://www.linkedin.com/in/daniellypedrini/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="mailto:Daiellypedrini@outlook.com" target="_blank">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Outlook">
  </a>
</div>

**Danielly Pedrini** - Transformando ideias em animações CSS com o poder da Inteligência Artificial ✨
