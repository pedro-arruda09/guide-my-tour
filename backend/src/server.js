const express = require('express');
const UserRoutes = require('./routes/UserRoutes');
const routes = [UserRoutes];
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);