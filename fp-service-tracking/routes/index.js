const express = require('express');
const router = express.Router();

const util = require('util')
const chance = require('chance')
const faker = require('faker')


/* GET home page. */
router.get('/', (req, res) => {
	res.render('index',
      { title: "Shiru",
        company: "BSU",
        doctor: faker.name.findName(),
        year: "2020"
	  	});


});

module.exports = router;
