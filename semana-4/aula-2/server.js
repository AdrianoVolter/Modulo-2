const app = require('./src/index.js');
const port = 3000;

console.log(app);
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));
