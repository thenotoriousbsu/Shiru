const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var schema = {
  "type": "array",
  "minItems": 10,
  "maxItems": 20,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "name.findName"
      },
      "protein":{
        "type": "string",
        "faker":"lorem.word"
      },
      "days":{
        "type": "integer",
	      "minimum": 0,
  		  "maximum": 365
      },
	    "hours" : {
	      "type": "integer",
	       "minimum": 0,
  		   "maximum": 59
      },
      "minutes" : {
	      "type": "integer",
	      "minimum": 0,
  		  "maximum": 59
      },
      "seconds" : {
	      "type": "integer",
	       "minimum": 0,
  		   "maximum": 59
	    },
	    "status":{
        "faker":"random.boolean"
      },
      "id":{
        "faker":"random.number"
      }
	  },
	  "required": [
	    "name",
	    "medicament",
	    "hours",
      "minutes",
      "seconds",
      "days",
      "status",
      "id"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   console.log(util.inspect(sample,
  	   	{showHidden: false, depth: null}));

	   res.render('medicament',
	  	{  medicament:  sample });
  });


});

module.exports = router;
