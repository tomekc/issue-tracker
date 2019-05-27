const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('./routes/issues')(app);

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
