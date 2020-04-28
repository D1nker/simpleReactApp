const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { title, completed, date, gid } = req.body;

  const newTodo = new Todo({
    title,
    completed,
    date,
    gid
  });

  newTodo.save()
    .then(() => res.json(newTodo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Todo.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((todo) => {
      todo.completed = req.body.completed;
      todo.date = Date.parse(req.body.date);

      todo.save()
        .then(() => res.json('Todo Updated'))
        .catch(err => res.status(400).json(`Error: + ${err}`))
      ;
    })
    .catch(err => res.status(400).json(`Error: + ${err}`))
  ;
});

module.exports = router;

