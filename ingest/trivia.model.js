'use strict';

var mongoose = require('mongoose');

var TriviaSchema = mongoose.Schema({

  question: {
    type: String, index: {
      unique: true,
      dropDups: true
    }
  },
  answer: String,
  options: [String],
  category : String,
  difficulty : String

});

model.exports  = mongoose.model('trivia', TriviaSchema);