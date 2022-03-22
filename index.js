var express = require ('express');


const app = express();
const port = 3000;

app.get('/', (req, res ) => res.send('Express app works!'));

app.listen(port, () => console.info(`Express listening on port ${port}!`));