const express = require('express');

var app = express();

app.get('/', (req, res) => {
   res.status(404).send({
      error: 'Page not found.',
      name: 'Todo App v1.0'
   });
});

app.get('/users', (req, res) => {
   res.send([{
      name: 'Mike',
      age: 27
   }, {
      name: 'Brent',
      age: 28
   }, {
      name: 'Tim',
      age: 26
   }]);
});
// GET /users
// Give users a name property and age property

app.listen(3000);

module.exports.app = app;
