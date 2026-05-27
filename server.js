const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FORM_FILE = 'formularioMEoEnergia.html';
const FORM_PATH = path.join(__dirname, FORM_FILE);

// case-insensitive routing
app.set('case sensitive routing', false);

app.use(express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// accepts /formularioMeoEnergia regardless of capitalisation
app.get(/^\/formulario\s*meo\s*energia$/i, (_req, res) => {
  try {
    const html = fs.readFileSync(FORM_PATH, 'utf8');
    const injected = html.replace(
      '</body></html>',
      '<script src="/scripts/form-logger.js"></script></body></html>'
    );
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(injected);
  } catch (err) {
    console.error('Erro ao ler o ficheiro do formulário:', err.message);
    res.status(500).send(`<pre>Erro: ${err.message}\nCaminho: ${FORM_PATH}</pre>`);
  }
});

app.listen(PORT, () => {
  console.log(`\nServidor em http://localhost:${PORT}`);
  console.log(`  Home:       http://localhost:${PORT}/`);
  console.log(`  Formulário: http://localhost:${PORT}/formularioMeoEnergia\n`);
});
