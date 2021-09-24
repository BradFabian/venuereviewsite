const express = require('express');
const {
getVenues,
getVenue,
createVenue,
updateVenue,
deleteVenue,
} = require('../controller/venues.js');
const router = express.Router();

router.route('/')
.get(getVenues)
.post(createVenue);

router.route('/:id')
.get(getVenue)
.put(updateVenue)
.delete(deleteVenue);

module.exports = router;