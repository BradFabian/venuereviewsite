// @desc Get All Venues
// @route Get /api/v1/bootcamp/
// @access Public
exports.getVenues = (req, res, next ) => {
    res.status(200).json({ success: true, msg: 'Show All venues'});
}

// @desc Get a Venues
// @route Get /api/v1/bootcamp/:id
// @access Public
exports.getVenue = (req, res, next ) => {
    res.status(200).json({ success: true, msg: 'Show a venues'});
}


// @desc Post Venues
// @route Post /api/v1/bootcamp/
// @access Private
exports.postVenue = (req, res, next ) => {
    res.status(200).json({ success: true, msg: 'create a venue'});
}


// @desc Update Venues
// @route Put /api/v1/bootcamp/:id
// @access Private
exports.updateVenue = (req, res, next ) => {
    res.status(200).json({ success: true, msg: 'update a venue'});
}

// @desc Delete Venues
// @route Delete /api/v1/bootcamp/:id
// @access Private
exports.deleteVenues = (req, res, next ) => {
    res.status(200).json({ success: true, msg: 'delete a venue'});
}