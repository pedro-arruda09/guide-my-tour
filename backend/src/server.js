const express = require('express');
const UserRoutes = require('./routes/UserRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const routes = [UserRoutes, AuthRoutes];
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);