'use strict';

var mongoose = require('mongoose');

module.exports = function(connectionString) {

    mongoose.connect(connectionString,
        {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        });

};