module.exports = function(app) {
  var express = require('express');
  var questionsRouter = express.Router();

  questionsRouter.get('/', function(req, res) {
    res.send({
      'questions': [
            {
                "title": "here",
                "content": "there"
            },
            {
                "title": "hello",
                "content": "world"
            }
        ]
    });
  });

  questionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  questionsRouter.get('/:id', function(req, res) {
    res.send({
      'questions': {
        id: req.params.id
      }
    });
  });

  questionsRouter.put('/:id', function(req, res) {
    res.send({
      'questions': {
        id: req.params.id
      }
    });
  });

  questionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/questions', questionsRouter);
};
