const app = require('./src/config/custom-express');

app.listen(3000, () => {
    console.log(`Servidor online, na porta: 3000`);
});