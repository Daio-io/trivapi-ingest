'use strict';

var connectionString = process.env.DB_STRING || 'mongodb://localhost/trivapi';
var dbConnect = require('./db/db.connect');
var ingester = require('./ingest/trivia.ingester');

// Connect to DB
dbConnect(connectionString);
ingester.startIngest();
