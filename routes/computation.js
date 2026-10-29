var express = require('express');
var router = express.Router();

/* GET computation endpoint. */
router.get('/', function(req, res, next) {

  // Generate a random number
  var x = Math.random() * 100;

  // Use query parameter x if provided
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  // Check if x is a valid number
  if (!Number.isFinite(x)) {
    return res.status(400).send('Please provide a valid number for x');
  }

  // Apply Math.ceil to the number
  var y = Math.ceil(x);

  // Construct and send the response
  res.send(`Math.ceil applied to ${x} is ${y}`);

});

module.exports = router;
