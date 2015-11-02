'use strict';

var TriviaModel = require('./trivia.model');
var fs = require('fs');

exports.startIngest = function () {

  fs.readFile('./ingest/capitals_triva.json', function (err, data) {

    var trivia = JSON.parse(data);

    trivia.map(function (item) {

      new TriviaModel({
          question: item.question,
          answer: item.answer,
          options: item.options,
          category: item.category,
          difficulty: item.difficulty
        }
      ).save(function (err) {

          if (err) {
            console.log('Error adding trivia: ', item.question, err);
          }
          else {
            console.log(item.question, 'Added to DB');
          }

        });

    });

  });

};